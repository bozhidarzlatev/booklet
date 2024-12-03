import { Router } from "express";
import  authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

const AUTH_COOKIE_NAME = 'auth';


// Register page - POST
authController.post('/register',  async (req, res) => {
    const { username, email, profileImg, password, rePassword} = req.body;
    
    try {
        const token = await authService.register(username, email, profileImg, password, rePassword);
       
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.status(201).json({ message: 'Registration successful!' });
    } catch (err) {
        const error = getErrorMessage(err);
     
        res.status(400).json({ error });
    }
})





// Login page - POST
// authController.post('/login', isGuest, async (req, res) => {
//     const { username, password } = req.body;
    
//     try {
//         const token =  await authService.login( username, password);
//         res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
//         res.redirect('/')
//     } catch (err) {
//         const error = getErrorMessage(err)
//         res.render('auth/login', {title: 'Login' , username, error})
//     }
// })


// Logout page - GET
authController.get('/logout',  (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.status(204).json({ message: 'Logout successful!' });
})


export default authController;