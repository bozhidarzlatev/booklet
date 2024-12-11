import Book from "../models/Book.js";


function  create(bookData, userId, userName) {
        
    return Book.create({...bookData, owner: userId, ownerName: userName});
};


function allBooks(filter = {}) {
    const query = Book.find();
    
    
    if (filter && typeof filter === 'string') {
        if (filter.startsWith('$')) {
            
            query.find({ author: { $regex: filter.substring(1,), $options: 'i' } })
        } else if ((filter.startsWith('@'))) {
            
            query.find({ ownerName: { $regex: filter.substring(1,), $options: 'i' } })
        } else {

            query.find({ title: { $regex: filter, $options: 'i' } })
        }
        
    } 
    
    return query;


};



async function getOneBook(bookId) {
    const book = await Book.findById(bookId)
    
    return book
}

function getTopbooks() {
    return Book.find({}).sort({rating: -1}).limit(5)
}

async function returnBookData(data) {
    const books =[]
    for (const element of data) {
        const bookData = await getOneBook(element);  // Wait for the result from getOneBook
        
        books.push(bookData);  // Push the book data to the 'books' array
    }
    return books
}
 

const bookService = {
    create,
    allBooks,
    getOneBook,
    getTopbooks,
    returnBookData
}

export default bookService;