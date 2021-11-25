const path = require('path');

const sqlite3 = require('sqlite3').verbose();

const Tables = require('./Tables');

// Creates database connection.
const createDatabase = (isTesting) => {
  let dbFilePath = 'db.sqlite3';

  if (isTesting) {
    dbFilePath = 'db.test.sqlite3';
  }

  const dbFullFilePath = path.resolve(dbFilePath);
  const db = new sqlite3.Database(dbFullFilePath, (err) => {
    if (err) {
      console.log('Error connecting on database:', err.message);
      return;
    }

    console.log(`Creates database on: ${dbFullFilePath}`);
  });

  // Creates tables if not exists.
  const tables = new Tables(db);
  tables.createTables();

  // Finishes connection with database when CTRL + C.
  process.on('SIGINT', () => {
    db.close((err) => {
      if (err) {
        console.log('Error closing database:', err.message);
        return;
      }
      
      console.log('Finishes database connection!');
      process.exit(1);
    });
  });

  return db;
}

module.exports = createDatabase;
