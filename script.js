const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const container = document.getElementById('library-container');
    container.innerHTML = ''; // Clear existing cards

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
        `;

        container.appendChild(card);
    });
}

// ==== DOM Interaction ====
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

// Optional: Pre-load some books for testing
addBookToLibrary('Dune', 'Frank Herbert', '412', true);
addBookToLibrary('1984', 'George Orwell', '328', false);
