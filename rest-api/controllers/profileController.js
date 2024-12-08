import { Router } from "express";
import jwt from "jsonwebtoken"

const profileController = Router();


// Home Page - GET
profileController.get('/profile', async (req, res) =>{
    const userData = req.cookies.authToken
    const decode = jwt.verify(userData, process.env.JWT_SECRET)
    const userId = JSON.parse(decode)
    
    const profileData = await 

    res.send(decode)
});

export default profileController;

