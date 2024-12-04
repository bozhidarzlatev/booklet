import Book from "../models/Book.js";


function  create(bookData) {
    return Book.create({...bookData});
};

const bookService = {
    create
}

export default bookService;