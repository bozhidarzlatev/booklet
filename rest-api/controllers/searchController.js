import { Router } from "express";
import bookService from "../services/bookService.js";

const searchController = Router();


// Home Page - GET
searchController.get('/:searchId', async (req, res) =>{
    const search = req.params.searchId
    const result = await bookService.allBooks(search).lean()

    res.status(200).send(result)
});

export default searchController;

