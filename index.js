import BookStorage from './modules/bookStorage.js';
import { setupNavigation } from './modules/navigation.js';
import { DateTime } from './modules/luxon.js';

const form = document.querySelector('.add-form');
const bookList = document.querySelector('.book-list');
const date = document.getElementById('date');
const stringDate = {
  month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, second: 'numeric',
};
const now = DateTime.now();
const newDate = now.setLocale('en-US').toLocaleString(stringDate);
date.innerHTML = newDate;

const storage = new BookStorage();

// Button listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  storage.createBook(title.value, author.value);
  storage.displayData();
});

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const id = parseInt(event.target.dataset.id, 10);
    storage.removeData(id);
  }
});

// Setup navigation
setupNavigation();
