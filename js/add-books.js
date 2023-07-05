/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor() {
    this.bookList = [];
    this.localStorage = window.localStorage;
  }

  add(book) {
    if (book) {
      this.bookList.push(book);
      this.localStorage.setItem('books', JSON.stringify(this.bookList));
    }
  }

  remove(index) {
    this.bookList = this.bookList.filter((book) => book.title !== this.bookList[index].title);
    this.localStorage.setItem('books', JSON.stringify(this.bookList));
  }

  allBook() {
    const data = this.localStorage.getItem('books');

    if (data) {
      this.bookList = JSON.parse(data);
    } else {
      this.bookList = [];
    }
    return this.bookList;
  }
}

const bookList = new BookList();
const contain = document.querySelector('.list-book');

const addBook = (book) => {
  bookList.add(book);
};

const form = document.querySelector('form');

const display = () => {
  const books = bookList.allBook();
  contain.innerHTML = '';
  let currentColor = '#dddddd';
  books.forEach((book, i) => {
    const bookItem = `
      <div class="book-details flex">
        <p class="title">"${book.title}"</p>
        <span> by </span>
        <p class="author">${book.author}</p>
      </div>
      <button onclick="removeBook(${i})">Remove</button>
    `;

    const bookContainer = document.createElement('div');
    bookContainer.setAttribute('class', 'book flex');
    bookContainer.innerHTML = bookItem;
    if (currentColor !== bookContainer.style.backgroundColor) {
      bookContainer.style.backgroundColor = currentColor;
      currentColor = '';
    } else {
      currentColor = '#dddddd';
    }
    contain.appendChild(bookContainer);
  });

  if(books.length !== 0) {
    document.querySelector('.all-awesome').style.display = 'block';
    document.querySelector('.list-book').style.border = "2px solid #000";
  }
};

/* eslint-disable no-unused-vars */
const removeBook = (index) => {
    bookList.remove(index);
    display();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.elements.title.value;
  const author = form.elements.author.value;
  addBook(new Book(title, author));

  display();
  form.reset();
});

window.addEventListener('load', () => {
  const bookStore = JSON.parse(localStorage.getItem('books')) || [];

  if(bookStore.length !== 0){
    const books = bookList.allBook();
    contain.innerHTML = '';
    let currentColor = '#dddddd';
    books.forEach((book, i) => {
    const bookItem = `
      <div class="book-details flex">
        <p class="title">"${book.title}"</p>
        <span> by </span>
        <p class="author">${book.author}</p>
      </div>
      <button onclick="removeBook(${i})">Remove</button>
    `;

    const bookContainer = document.createElement('div');
    bookContainer.setAttribute('class', 'book flex');
    bookContainer.innerHTML = bookItem;
    if (currentColor !== bookContainer.style.backgroundColor) {
      bookContainer.style.backgroundColor = currentColor;
      currentColor = '';
    } else {
      currentColor = '#dddddd';
    }
    contain.appendChild(bookContainer);
  });
    document.querySelector('.all-awesome').style.display = 'block';
    document.querySelector('.list-book').style.border = "2px solid #000";
  }   else {
  	document.querySelector('.list-book').innerHTML = '<p class="no-book"> No book add yet</p>';
    document.querySelector('.all-awesome').style.display = 'none';
    document.querySelector('.list-book').style.border = "none";
  }
});
