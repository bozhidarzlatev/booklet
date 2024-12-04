import { Router } from "express";
import bookService from "../services/bookService.js";

const bookController = Router();



bookController.post('/add', async (req, res) =>{

    const bookData = req.body

    try {
        const response = await bookService.create(bookData);
        console.log(response);
        
        res.status(201).json('Book added successfully')
    } catch (err) {
        res.status(201).json({ message: err })
    }
});

export default bookController;

