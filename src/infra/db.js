const path = require('path');

const sqlite3 = require('sqlite3').verbose();

const Tables = require('./Tables');

// Creates database connection.
const createDatabase = (dbRelFilePath) => {
  const dbFilePath = path.resolve(dbRelFilePath);
  const db = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
      console.log('Error connecting on database:', err.message);
      return;
    }

    console.log(`Creates database on: ${dbFilePath}`);
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
      
      console.log('Finished database connection!');
      process.exit(1);
    });
  });

  return db;
}

module.exports = createDatabase;
