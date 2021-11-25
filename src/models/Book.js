class Book {
  constructor(ISBN, title, description, imgUrl, price, pubYear, pages, compId, authorId) {
    this.ISBN = this._verifyISBN(ISBN);
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl; // TODO: verify: valid URL
    this.price = price; // TODO: verify: is valid price in the format 00.00
    this.pubYear = pubYear; // TODO: verify: is valid year in the format YYYY
    this.pages = pages;
    this.compId = compId;
    this.authorId = authorId;
  }

  _verifyISBN(ISBN) {
    if (!ISBN) {
      throw new Error('ISBN is mandatory');
    }

    if (ISBN.length > 13) {
      throw new Error('ISBN should have at least 13 characters');
    }

    return ISBN;
  }
}

module.exports = Book;
