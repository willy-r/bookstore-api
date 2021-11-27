const BookDAO = require('../DAO/BookDAO');
const Book = require('../models/Book');

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

  app.post('/api/book', async (req, res) => {
    const body = req.body;

    try {
      // Try to create an instance of book.
      const newBook = new Book(...Object.values(body));

      try {
        const ISBN = await DAO.getBookISBN(newBook.ISBN);

        if (ISBN) {
          res.status(400).json({
            error: true,
            msg: `The book with ISBN ${ISBN} already exists`,
          });
          return;
        }

        const infoCreatedBook = await DAO.createBook(newBook);

        res.status(201).json({
          error: false,
          info: infoCreatedBook,
        });
      } catch (err) {
        res.status(500).json({
          error: false,
          msg: err.message,
        });
      }
    } catch (err) {
      res.status(400).json({
        error: true,
        msg: err.message,
      });
    }
  });
}

module.exports = BookController;
