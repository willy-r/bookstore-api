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

  getBookISBN(ISBN) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT ISBN FROM livro
        WHERE ISBN = ?;
      `;

      this._db.get(query, ISBN, (err, row) => {
        if (err) {
          reject(new Error(`Error consulting database: ${err.message}`));
          return;
        }

        resolve(row?.ISBN);
      });
    });
  }

  createBook(book) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO livro
          (ISBN, titulo, descricao, url_img, preco, paginas, ano_publicacao, id_editora, id_autor)
        VALUES
          (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ;
      `;
      const params = Object.values(book);

      this._db.run(query, params, function(err) {
        if (err) {
          reject(new Error(`Error creating new book: ${err.message}`));
          return;
        }

        resolve(this.lastID);
      });
    });
  }
}

module.exports = BookDAO;
