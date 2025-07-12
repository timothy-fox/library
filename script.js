const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayLibrary() {
    console.table(myLibrary, ['id', 'title', 'author', 'pages', 'read']);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
addBookToLibrary('Dune', 'Frank Herbert', '412', 'read');

displayLibrary();
