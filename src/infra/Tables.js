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
        console.log(err.message);
        return;
      }

      console.log('Book table created (or already exists) successfully!');
    });
  }
}

module.exports = Tables;
