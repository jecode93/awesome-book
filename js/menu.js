const headerDate = document.querySelector('.date');
const list = document.getElementById('list-book');
const contact = document.getElementById('contact');
const addNew = document.getElementById('addNew');

headerDate.innerHTML = Date();

list.addEventListener('click', () => {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  if (books.length === 0) {
    document.querySelector('.list-book').innerHTML = '<p class="no-book"> No book add yet</p>';
    document.querySelector('.all-awesome').style.display = 'none';
    document.querySelector('.list-book').style.border = 'none';
  } else {
    document.querySelector('.all-awesome').style.display = 'block';
    /* global display */
    /* eslint no-undef: "error" */
    display();
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