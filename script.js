const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
  const container = document.getElementById('library-container');
  container.innerHTML = '';

  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card');

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
    `;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => removeBook(book.id));

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Read';
    toggleBtn.classList.add('toggle-btn');
    toggleBtn.addEventListener('click', () => {
      book.toggleRead();
      displayBooks();
    });

    card.appendChild(toggleBtn);
    card.appendChild(removeBtn);
    container.appendChild(card);
  });
}



function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

document.getElementById('new-book-btn').addEventListener('click', () => {
    const form = document.getElementById('book-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const read = document.getElementById('read').checked;

    if (title && author && pages) {
        addBookToLibrary(title, author, pages, read);
        e.target.reset();
        document.getElementById('book-form').style.display = 'none';
    }
});

addBookToLibrary('Old Path White Clouds: Walking in the Footsteps of the Buddha', 'Thich Nhat Hanh', '600', true);
addBookToLibrary('The Fellowship of the Ring', 'J.R.R. Tolkien', '432', true);
addBookToLibrary('Crying in H Mart', 'Michelle Zauner', '243', true);
addBookToLibrary('The Emperor of Gladness', 'Ocean Vuong', '416', false);
