const path = require('path');
const { unlinkSync } = require('fs');

const customExpress = require('../config/customExpress');

// Creates the app passing true as argument,
// meaning that should create the test db.
const app = customExpress(true);

const deleteDatabase = () => {
  const dbTestFilePath = path.resolve('./src/tests/db.test.sqlite3');
  
  try {
    unlinkSync(dbTestFilePath);
    console.log(`Successfully deleted ${dbTestFilePath} after all tests`);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }
}

module.exports = {
  app,
  deleteDatabase,
};
