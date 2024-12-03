import { Router } from "express";

const profileControler = Router();


// Home Page - GET
profileControler.get('/profile', (req, res) =>{
    res.send('sadsads')
});

export default profileControler;

