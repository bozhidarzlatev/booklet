import Book from "../models/Book.js";


function  create(bookData, userId, userName) {
        
    return Book.create({...bookData, owner: userId, ownerName: userName});
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