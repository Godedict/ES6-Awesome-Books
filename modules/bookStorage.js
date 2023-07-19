export default class BookStorage {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('books')) || [];
  }

  saveData() {
    localStorage.setItem('books', JSON.stringify(this.data));
  }

  addData(book) {
    this.data.push(book);
    this.saveData();
  }

  removeData(id) {
    this.data = this.data.filter((book) => book.id !== id);
    this.data.forEach((book, index) => {
      book.id = index; // Update the id property of each book
    });
    this.saveData();
    this.displayData();
  }

  displayData() {
    let idBook = 0;
    const bookList = document.querySelector('.book-list');
    bookList.innerHTML = '';
    this.data.forEach((element) => {
      element.id = idBook;
      bookList.innerHTML += `
        <li class="list-item">
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
      id: this.data.length,
      bookTitle: tit,
      bookAuthor: bAuth,
    };
    this.addData(book);
  }
}
