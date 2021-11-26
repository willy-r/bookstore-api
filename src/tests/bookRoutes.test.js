const request = require('supertest');

const { app, deleteDatabase } = require('./config');

afterAll(() => {
  deleteDatabase();
});

describe('Tests GET methods', () => {
  describe('Endpoint /api/books', () => {
    test('Should return 9 books', async () => {
      const res = await request(app).get('/api/books');
      
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('books');
      expect(res.body.count).toBe(9);
    });

    test('Should have "error" property', async () => {
      const res = await request(app).get('/api/books');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.error).toBeFalsy();
      expect(res.body).toHaveProperty('error');
    });
  });
});
