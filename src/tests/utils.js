const path = require('path');
const { unlinkSync } = require('fs');

const deleteDatabase = () => {
  const dbTestFilePath = path.resolve('./src/tests/db.test.sqlite3');
  
  try {
    unlinkSync(dbTestFilePath);
    console.log(`Successfully deleted ${dbTestFilePath} after all tests`);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }
}

const validBook = {
  ISBN: '1234567890',
  titulo: 'Livro Bacana',
  descricao: 'Este livro é muito bacana!',
  url_img: 'https://m.media-amazon.com/images/I/51qnfeR7uCL.jpg',
  preco: 24.42,
  paginas: 123,
  ano_publicacao: 2021,
  id_editora: 4,
  id_autor: 4,
};

module.exports = {
  deleteDatabase,
  validBook,
};
