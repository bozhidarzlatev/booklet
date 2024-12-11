import { Router } from "express";

const homeController = Router();


// Home Page - GET
homeController.get('/', (req, res) =>{
    res.status(200).send('Hello, this is Booklet\'s API for my SofUni Angular course final project!')
});

export default homeController;

