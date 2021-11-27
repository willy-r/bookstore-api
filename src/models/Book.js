class Book {
  constructor(ISBN, title, description, imgUrl, price, pubYear, pages, compId, authorId) {
    // Verify data before assign attributes.
    this._verifyData(ISBN, title, description, imgUrl, price, pubYear);

    this.ISBN = ISBN;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
    this.price = price;
    this.pubYear = pubYear;
    this.pages = pages;
    this.compId = compId;
    this.authorId = authorId;
  }

  _verifyData(ISBN, title, description, imgUrl, pubYear) {
    this._verifyISBN(ISBN);
    this._verifyTitle(title);
    this._verifyDescription(description);
    this._verifyImgUrl(imgUrl);
    this._verifyPubYear(pubYear);
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

  _verifyTitle(title) {
    if (!title) {
      throw new Error('titulo is mandatory');
    }

    if (typeof title !== 'string') {
      throw new Error('titulo must be a valid string');
    }

    if (title.length > 255) {
      throw new Error('titulo must have at least 255 characters');
    }
  }

  _verifyDescription(description) {
    if (!description) {
      throw new Error('descricao is mandatory');
    }

    if (typeof description !== 'string') {
      throw new Error('descricao must be a valid string');
    }
  }
 
  _verifyImgUrl(imgUrl) {
    if (!imgUrl) {
      throw new Error('img_url is mandatory');
    }

    if (typeof imgUrl !== 'string') {
      throw new Error('img_url must be a valid string');
    }

    if (imgUrl.length > 255) {
      throw new Error('img_url must have at least 255 characters');
    }

    const regex = /^(http(s)?):\/\/[^ "]+$/;

    if (!regex.test(imgUrl)) {
      throw new Error('img_url must be a valid URL');
    }
  }

  _verifyPrice(price) {
    if (typeof price === 'undefined' || price === null) {
      throw new Error('preco is mandatory');
    }

    if (typeof price !== 'number' ) {
      throw new Error('preco must be a valid number');
    }

    if (price <= 0) {
      throw new Error('preco must be a number greater than 0');
    }

    const regex = /\d{2}.\d{2}/;

    if (!regex.test(price.toString())) {
      throw new Error('preco must be in the format 12.34');
    }
  }

  _verifyPubYear(pubYear) {
    if (typeof pubYear === 'undefined' || pubYear === null) {
      throw new Error('ano_publicacao is mandatory');
    }

    if (typeof pubYear !== 'number' ) {
      throw new Error('ano_publicacao must be a valid number greater than 0');
    }

    const regex = /\d{4}/;

    if (!regex.test(pubYear.toString())) {
      console.log(pubYear);
      throw new Error('ano_publicacao must be in the format YYYY');
    }

    const yearNow = new Date().getFullYear();

    if (pubYear > yearNow) {
      throw new Error('ano_publicacao must not be in the future');
    }
  }
}

module.exports = Book;
