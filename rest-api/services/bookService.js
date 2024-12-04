import Book from "../models/Book.js";


function  create(bookData) {
    return Book.create({...bookData});
};


function allBooks(filter = {}) {
    const query = Book.find();

    return query;
};

function getOneBook(bookId) {
    const book = Book.findById(bookId)
    
    
    return book
}

const bookService = {
    create,
    allBooks,
    getOneBook
}

export default bookService;