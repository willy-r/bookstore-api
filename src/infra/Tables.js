const schemas = require('./schemas');

class Tables {
  constructor(db) {
    this._db = db;
  }

  createTables() {
    this._db.serialize(() => {
      this._createBookTable();
    });
  }

  _createBookTable() {
    this._db.run(schemas.createBookTable, (err) => {
      if (err) {
        console.log(`Error creating book table: ${err.message}`);
        return;
      }

      console.log('The book table has been created (or already exists) successfully!');
    });
  }

  populateTables() {
    this._db.serialize(() => {
      this._populateBookTable();
    });
  }

  _populateBookTable() {
    this._db.run(schemas.populateBookTable, (err) => {
      if (err) {
        console.log(`Error populating book table: ${err.message}`);
        return;
      }

      console.log('The book table has been populated successfully!');
    });
  }
}

module.exports = Tables;
