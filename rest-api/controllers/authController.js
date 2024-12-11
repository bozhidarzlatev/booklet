import { Router } from "express";
import  authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

const AUTH_COOKIE_NAME = 'authToken';


// Register page - POST
authController.post('/register',  async (req, res) => {
    const { username, email, profileImg, password, rePassword} = req.body;
    
    try {
        const token = await authService.register(username, email, profileImg, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        const user = await authService.findProfile({username}); 
       
        res.status(201).json(user);
    } catch (err) {
        const error = getErrorMessage(err);
        console.log(err);
   
        res.status(400).json({ error });
    }
})



// Login page - POST
authController.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const token =  await authService.login( username, password);
        const user = await authService.findProfile({username})

        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.status(200).json(user);
    } catch (err) {
        const error = getErrorMessage(err);
        console.error(err)
        res.status(401).json({ error });
    }
})


// Logout page - GET
authController.get('/logout',  (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    req.user = ``
    res.status(204).json({ message: 'Logout successful!' });
})





export default authController;