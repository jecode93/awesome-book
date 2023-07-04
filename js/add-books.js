const title = document.querySelector('#title');
const author = document.querySelector('#author');
const add = document.querySelector('.submit');
const allBooks = document.querySelector('#all-books');

const bookStore = JSON.parse(localStorage.getItem('books')) || [];

function showBooks() {
  const displayBooks = bookStore.map((book, index) => `
    <article class="books">
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button class="remove" onclick="removeBook(${index})">Remove</button>
      <hr />
    </article>
`);
  allBooks.innerHTML = displayBooks.join('');
}

function addBooks() {
  if (title.value !== '' && author.value !== '') {
    bookStore.push({ title: title.value, author: author.value });
  }
}

function saveBooks() {
  localStorage.setItem('books', JSON.stringify(bookStore));
}

function clearInput() {
  title.value = '';
  author.value = '';
}

function removeBook(index) { // eslint-disable-line no-unused-vars
  bookStore.splice(index, 1);
  saveBooks();
  showBooks();
}

add.addEventListener('click', (e) => {
  e.preventDefault();
  addBooks();
  saveBooks();
  showBooks();
  clearInput();
});

window.addEventListener('DOMContentLoaded', () => {
  showBooks();
});