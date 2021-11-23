class Book {
  constructor(ISBN, title, description, imgUrl, topic, posAvaliations, price, pubYear, compId, authorId) {
    this.ISBN = this._verifyISBN(ISBN);
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl; // TODO: verify: valid URL
    this.topic = topic;
    this.posAvaliations = posAvaliations;
    this.price = price; // TODO: verify: is valid price in the format 00.00
    this.pubYear = pubYear; // TODO: verify: is valid year in the format YYYY
    this.compId = compId;
    this.authorId = authorId;
  }

  _verifyISBN(ISBN) {
    if (!ISBN) {
      throw new Error('ISBN is mandatory');
    }

    if (ISBN.length > 13) {
      throw new Error('ISBN should have 13 characters');
    }

    return ISBN;
  }
}

module.exports = Book;
