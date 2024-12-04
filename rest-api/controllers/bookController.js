import { Router } from "express";
import bookService from "../services/bookService.js";

const bookController = Router();



bookController.post('/add', async (req, res) =>{

    const bookData = req.body

    try {
        const response = await bookService.create(bookData);
        console.log(response.json());
        
        res.status(201).json('Book added successfully')
    } catch (err) {
        res.status(201).json({ message: err })
    }
});


bookController.get('/all', async (req, res) => {
        const booksData = await bookService.allBooks().lean()
        res.json(booksData)
})

export default bookController;

