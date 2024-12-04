import { Router } from "express";

const profileControler = Router();


// Home Page - GET
profileControler.get('/profile', async (req, res) =>{
    const bookData = req.body
    console.log(bookData);
    
    res.send(`it worsk`)
});

export default profileControler;

