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
    const body = { ...req.body };
    
    try {
      // Try to create an instance of Book.
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

        const createdBookId = await DAO.createBook(newBook);
        const createdBook = await DAO.getBookById(createdBookId);

        res.status(201).json({
          error: false,
          msg: 'Book was created successfully',
          createdBook: createdBook,
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

  app.patch('/api/book/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const body = { ...req.body };
    
    try {
      const oldBook = await DAO.getBookById(id);
      
      if (!oldBook) {
        res.status(404).json({
          error: true,
          msg: `The book with ID ${id} was not found`,
        });
        return;
      }
      
      // Try to create an instance of Book.
      const newBook = new Book(
        body.ISBN || oldBook.ISBN,
        body.titulo || oldBook.titulo,
        body.descricao || oldBook.descricao,
        body.url_img || oldBook.url_img,
        body.preco || oldBook.preco,
        body.paginas || oldBook.paginas,
        body.ano_publicacao || oldBook.ano_publicacao,
        // Not required, uses the same.
        oldBook.id_editora,
        oldBook.id_autor
      );

      try {
        const ISBN = await DAO.getBookISBN(newBook.ISBN);

        if (ISBN && ISBN !== oldBook.ISBN) {
          res.status(400).json({
            error: true,
            msg: `The book with ISBN ${ISBN} already exists`,
          });
          return;
        }

        const updatedBookId = await DAO.updateBook(id, newBook);
        const updatedBook = await DAO.getBookById(updatedBookId);

        // Gets only the updated fields.
        const updatedFields = Object.entries(updatedBook).filter((arrBook) => {
          return body[arrBook[0]] === arrBook[1];
        }).reduce((fields, arrBook) => {
          fields[arrBook[0]] = arrBook[1];
          return fields;
        }, {});
        
        res.status(200).json({
          error: false,
          msg: 'Book was updated successfully',
          updatedFields: updatedFields,
          bookId: updatedBookId,
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

  app.delete('/api/book/:id', async (req, res) => {
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

      const deletedBookId = await DAO.deleteBook(id);

      res.status(200).json({
        error: false,
        msg: 'Book was deleted successfully',
        bookId: deletedBookId,
      });
    } catch (err) {
      res.status(500).json({
        error: true,
        msg: err.message,
      });
    }
  });
}

module.exports = BookController;
