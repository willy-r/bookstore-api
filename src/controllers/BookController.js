const BookDAO = require('../DAO/BookDAO');

const BookController = (app, db) => {
  const DAO = new BookDAO(db);

  app.get('/api/books', async (_, res) => {
    try {
      const books = await DAO.getBooks();

      res.status(200).json({
        error: false,
        count: books.length,
        books: books,
      });
    } catch (errObj) {
      res.status(errObj.statusCode).json({
        error: true,
        msg: errObj.message,
      });
    }
  });
}

module.exports = BookController;
