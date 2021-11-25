const createBookTable =  `
  CREATE TABLE IF NOT EXISTS livro (
    id_livro INTEGER PRIMARY KEY AUTOINCREMENT,
    ISBN VARCHAR(13) UNIQUE NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    url_img VARCHAR(255),
    preco FLOAT(4, 2) NOT NULL,
    paginas INTEGER NOT NULL,
    ano_publicacao YEAR NOT NULL,
    id_editora INTEGER NOT NULL,
    autor_id INTEGER NOT NULL
  );
`;

module.exports = { createBookTable };
