import Book from "../models/Book.js";


function  create(bookData) {
    return Book.create({...bookData});
};

function allBooks(filter = {}) {
    const query = Book.find();

    return query;

}

const bookService = {
    create,
    allBooks
}

export default bookService;