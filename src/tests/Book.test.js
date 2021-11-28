const Book = require('../models/Book');

const { validBook } = require('./testsConfig');

describe('Creating new books', () => {
  test('Should create a valid instance of Book', () => {
    const book = new Book(...Object.values(validBook));
    expect(book).toBeInstanceOf(Book);
  });

  test('Should throw an error on creating Book with invalid ISBN', () => {
    expect(() => {
      const validBookCopy = { ...validBook };
      validBookCopy.ISBN = '123456789';
      
      return new Book(...Object.values(validBookCopy));
    }).toThrow(/10 or 13 characters/);
  });

  test('Should throw an error on creating Book with invalid image URL', () => {
    expect(() => {
      const validBookCopy = { ...validBook };
      validBookCopy.url_img = 'exemplo.com';
      
      return new Book(...Object.values(validBookCopy));
    }).toThrow(/must be a valid URL/);
  });

  test('Should throw an error on creating Book with publication year in the future', () => {
    expect(() => {
      const validBookCopy = { ...validBook };
      validBookCopy.ano_publicacao = new Date().getFullYear() + 1;
      
      return new Book(...Object.values(validBookCopy));
    }).toThrow(/must not be in the future/);
  });
});
