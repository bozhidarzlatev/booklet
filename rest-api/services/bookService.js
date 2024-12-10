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

function getTopbooks() {
    return Book.find({}).sort({rating: -1}).limit(4)
}

const bookService = {
    create,
    allBooks,
    getOneBook,
    getTopbooks
}

export default bookService;