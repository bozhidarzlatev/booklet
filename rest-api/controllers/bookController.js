import { Router } from "express";
import bookService from "../services/bookService.js";
import 'dotenv/config';
import authService from "../services/authService.js";
import bodyParser from "body-parser";

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
        console.log(err);
        
        res.status(400).json({ message: err })
    }
});

bookController.get('/all', async (req, res) => {
        const booksData = await bookService.allBooks().lean()
        const data = req.cookies.authToken
        // const decoded = jwt.verify(data, process.env.JWT_SECRET)
        
        res.json(booksData)
})


// single
bookController.get('/details/:bookId', async (req, res) => {  
    const {bookId} = req.params    
      
    const bookDetails = await bookService.getOneBook(bookId)
    res.json(bookDetails)
})

bookController.get('/top', async (req, res) => {

    try {
        const topBooks = await bookService.getTopbooks().lean();
        res.status(200).send(topBooks)
    } catch (error) {
        res.status(400).send({message: err})
    }

})


bookController.post('/', async (req, res) => {
    const data = req.params.input
    const searchQuery = req.body.searchQuery;

    res.send(data)
    
})


export default bookController;

