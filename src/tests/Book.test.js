const Book = require('../models/Book');

describe('Creating new books', () => {
  test('Should create a valid instance of Book', () => {
    const book = new Book(
      '1234567891',
      'Mussum Ipsum',
      'Não sou faixa preta cumpadi, sou preto inteiris, inteiris.',
      'https://shorturl.at/ehACG',
      69.69,
      2013,
      666,
      1,
      1,
    );
    expect(book).toBeInstanceOf(Book);
  });

  test('Should throw an error on creating Book instance with invalid ISBN', () => {
    expect(() => {
      return new Book(
        '123456789',
        'Mussum Ipsum',
        'Não sou faixa preta cumpadi, sou preto inteiris, inteiris.',
        'https://shorturl.at/ehACG',
        69.69,
        2013,
        666,
        1,
        1,
      );
    }).toThrow(/10 or 13 characters/);
  });
});
