const headerDate = document.querySelector('.date');
const list = document.getElementById('list-book');
const contact = document.getElementById('contact');
const addNew = document.getElementById('addNew');

headerDate.innerHTML = Date();

const displayBook = () => {
  const books = bookList.allBook();
  contain.innerHTML = '';
  let currentColor = '#dddddd';
  books.forEach((book, i) => {
    const bookItem = `
      <div class='book-details flex'>
        <p class='title'>'${book.title}'</p>
        <span> by </span>
        <p class='author'>${book.author}</p>
      </div>
      <button onclick='removeBook(${i})'>Remove</button>
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

  if (books.length !== 0) {
    document.querySelector('.all-awesome').style.display = 'block';
    document.querySelector('.list-book').style.border = '2px solid #000';
  }
};

list.addEventListener('click', () => {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  if (books.length === 0) {
    document.querySelector('.list-book').innerHTML = '<p class="no-book"> No book add yet</p>';
    document.querySelector('.all-awesome').style.display = 'none';
    document.querySelector('.list-book').style.border = 'none';
  } else {
    document.querySelector('.all-awesome').style.display = 'block';
    displayBook();
  }
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('#list').style.display = 'block';
  document.querySelector('.add-book').style.display = 'none';
});

contact.addEventListener('click', () => {
  document.querySelector('.add-book').style.display = 'none';
  document.querySelector('.contact').style.display = 'flex';
});

addNew.addEventListener('click', () => {
  document.querySelector('.add-book').style.display = 'flex';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('#list').style.display = 'none';
});