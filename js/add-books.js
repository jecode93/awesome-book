const title = document.querySelector('#title');
const author = document.querySelector('#author');
const add = document.querySelector('.submit');
const allBooks = document.querySelector('#all-books');
const error = document.querySelector('.error');

const bookStore = JSON.parse(localStorage.getItem('books')) || [];

function showBooks() {
  for (let i = 0; i < bookStore.length; i += 1) {
    allBooks.innerHTML += `
    <article class="books">
      <p>${bookStore[i].title}</p>
      <p>${bookStore[i].author}</p>
      <button class="remove" onclick="removeBook(${i})">Remove</button>
      <hr>
    </article>
`;
  }
}

function addBooks(event) {
  event.preventDefault();
  if (title.value && author.value) {
    const newBooks = {
      title: title.value,
      author: author.value,
    };
    bookStore.push(newBooks);
    localStorage.setItem('books', JSON.stringify(bookStore));
    showBooks();
    title.value = '';
    author.value = '';
    error.innerHTML = '';
  } else {
    error.innerHTML = 'Please enter a book'
  }
}

function removeBook(index) {
  bookStore.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(bookStore));
  showBooks();
}

add.addEventListener('click', addBooks);
showBooks();
