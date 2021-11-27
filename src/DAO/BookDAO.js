class BookDAO {
  constructor(db) {
    this._db = db;
  }

  getBooks() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM livro;';

      this._db.all(query, (err, rows) => {
        if (err) {
          reject(new Error(`Error consulting database: ${err}`));
          return;
        }

        resolve(rows);
      });
    });
  }

  getBookById(id) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT * FROM livro
        WHERE id_livro = ?;
      `;

      this._db.get(query, id, (err, row) => {
        if (err) {
          reject(new Error(`Error consulting database: ${err.message}`));
          return;
        }

        resolve(row);
      });
    });
  }
}

module.exports = BookDAO;
