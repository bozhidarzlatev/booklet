import { Router } from "express";

const homeController = Router();


// Home Page - GET
homeController.get('/', (req, res) =>{
    res.send('sadsads')
});

export default homeController;

