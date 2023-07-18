export default class BookStorage {
  data = []

  addData(book) {
    this.data.push(book);
  }

  removeData(id) {
    this.data = this.data.filter((book) => book.id !== id);
    this.displayData();
  }

  displayData() {
    let idBook = 0;
    const bookList = document.querySelector('.book-list');
    bookList.innerHTML = '';
    this.data.forEach((element) => {
      element.id = idBook;
      bookList.innerHTML += `<li class="list-item">
                                  <div class="title-container">
                                  <p id="titlep">${element.bookTitle}</p>
                                  <p id="authorp">by ${element.bookAuthor}</p>
                                  </div>
                                  <div class= "button-container">
                                  <button class="delete" data-id="${element.id}">Remove</button>
                                  </div>
                                  </li>
  `;
      idBook += 1;
    });
  }

  createBook(tit, bAuth) {
    const book = {
      id: 0,
      bookTitle: tit,
      bookAuthor: bAuth,
    };
    this.addData(book);
  }
}
