class BookDAO {
  constructor(db) {
    this._db = db;
  }

  getBooks() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM livro;';

      this._db.all(query, (err, rows) => {
        if (err) {
          reject(new Error(`Error on consulting database: ${err}`));
          return;
        }

        resolve(rows);
      });
    });
  }
}

module.exports = BookDAO;
