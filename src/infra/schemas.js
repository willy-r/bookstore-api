const createBookTable = `
  CREATE TABLE IF NOT EXISTS livro (
    id_livro INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    ISBN TEXT UNIQUE NOT NULL,
    titulo TEXT NOT NULL,
    descricao TEXT NOT NULL,
    url_img TEXT NOT NULL,
    preco REAL NOT NULL,
    paginas INTEGER NOT NULL,
    ano_publicacao INTEGER NOT NULL,
    id_editora INTEGER NOT NULL,
    id_autor INTEGER NOT NULL
  );
`;

const populateBookTable = `
  INSERT INTO livro
    (ISBN, titulo, descricao, url_img, preco, paginas, ano_publicacao, id_editora, id_autor)
  VALUES
    ('1234567891', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 1, 1),
    ('1234567892', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 1, 1),
    ('1234567893', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 1, 1),
    ('1234567894', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 2, 2),
    ('1234567895', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 2, 2),
    ('1234567896', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 2, 2),
    ('1234567897', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 3, 3),
    ('1234567898', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 3, 3),
    ('1234567899', 'Mussum Ipsum', 'Mussum Ipsum', 'https://tinyurl.com/2a2pdw8r', 69.69, 2013, 666, 3, 3)
  ;
`;

module.exports = {
  createBookTable,
  populateBookTable,
};
