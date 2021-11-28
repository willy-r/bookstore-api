const request = require('supertest');

const { app, deleteDatabase, validBook } = require('./testsConfig');

afterAll(() => {
  deleteDatabase();
});

describe('Tests GET routes', () => {
  describe('Endpoint /api/book/all', () => {
    test('Should return 9 books', async () => {
      const res = await request(app).get('/api/book/all');
      
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('books');
      expect(res.body.count).toBe(9);
    });

    test('Should have "error" property to be false', async () => {
      const res = await request(app).get('/api/book/all');
      
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('error');
      expect(res.body.error).toBe(false);
    });
  });

  describe('Endpoint /api/book/{id}', () => {
    test('Should return the book with id=1', async () => {
      const res = await request(app).get('/api/book/1');
      
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('book');
      expect(res.body.book.id_livro).toBe(1);
    });

    test('Should return status code 404 for book that does not exists', async () => {
      const res = await request(app).get('/api/book/0');
      
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('error');
      expect(res.body.error).toBe(true);
    });
  });
});

describe('Tests POST route', () => {
  describe('Endpoint /api/book', () => {
    test('Should create a new book successfully', async () => {
      const res = await request(app).post('/api/book').send(validBook);

      expect(res.statusCode).toBe(201);
      expect(res.body.error).toBe(false);
    });

    test('Should return a status code 400 for book with the same ISBN', async () => {
      const res = await request(app).post('/api/book').send(validBook);

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe(true);
    });
  });
});
