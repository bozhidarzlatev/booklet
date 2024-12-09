import { Router } from "express";
import bookService from "../services/bookService.js";
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import authController from "./authController.js";
import authService from "../services/authService.js";

const bookController = Router();

const AUTH_COOKIE_NAME = 'auth';
const JWT_SECRET = '41d56qw4d6qw416d54qw64'

bookController.post('/add', async (req, res) =>{

    const bookData = req.body
    const userData = await authService.getProfile(req)
    const userId = userData._id
    
   
    try {
        const response = await bookService.create(bookData, userData._id, userData.username);

        res.status(201).json('Book added successfully')
    } catch (err) {
        res.status(201).json({ message: err })
    }
});

bookController.get('/all', async (req, res) => {
        const booksData = await bookService.allBooks().lean()
        const data = req.cookies.authToken
        // const decoded = jwt.verify(data, process.env.JWT_SECRET)
        
        res.json(booksData)
})

bookController.get('/details/:bookId', async (req, res) => {  
    const {bookId} = req.params    
      
    const bookDetails = await bookService.getOneBook(bookId).lean()
    res.json(bookDetails)
})




export default bookController;

