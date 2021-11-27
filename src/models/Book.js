class Book {
  constructor(ISBN, title, description, imgUrl, price, pubYear, pages, compId, authorId) {
    // Verify data before assign attributes.
    this._verifyData(ISBN);

    this.ISBN = ISBN;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl; // TODO: verify: valid URL
    this.price = price; // TODO: verify: is valid price in the format 00.00
    this.pubYear = pubYear; // TODO: verify: is valid year in the format YYYY
    this.pages = pages;
    this.compId = compId;
    this.authorId = authorId;
  }

  _verifyData(ISBN) {
    this._verifyISBN(ISBN);
  }

  _verifyISBN(ISBN) {
    if (!ISBN) {
      throw new Error('ISBN is mandatory');
    }

    if (typeof ISBN !== 'string') {
      throw new Error('ISBN must be a valid string');
    }

    if (ISBN.length !== 10 && ISBN.length !== 13) {
      throw new Error('ISBN must have 10 or 13 characters');
    }
  }

  // _verifyImgUrl(imgUrl) {
  //   const regex = /^(ftp|http|https):\/\/[^ "]+$/;
  // }
}

module.exports = Book;
