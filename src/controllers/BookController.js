const BookDAO = require('../DAO/BookDAO');

const BookController = (app, db) => {
  const DAO = new BookDAO(db);

  app.get('/api/book/all', async (_, res) => {
    try {
      const books = await DAO.getBooks();

      res.status(200).json({
        error: false,
        count: books.length,
        books: books,
      });
    } catch (errObj) {
      res.status(500).json({
        error: true,
        msg: errObj.message,
      });
    }
  });

  app.get('/api/book/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const book = await DAO.getBookById(id);

      if (!book) {
        res.status(404).json({
          error: true,
          msg: `The book with ID ${id} was not found`,
        });
        return;
      }

      res.status(200).json({
        error: false,
        book: book,
      });
    } catch (errObj) {
      res.status(500).json({
        error: true,
        msg: errObj.message,
      });
    }
  });
}

module.exports = BookController;
