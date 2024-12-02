import { Router } from "express";
import  authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth, isGuest } from "../middlewares/authMiddlewares.js";

const authController = Router();

const AUTH_COOKIE_NAME = 'auth';

// Register page - GET
authController.get('/register', isGuest,  (req, res) => {
    res.render('auth/register', {title: 'Register'})
})


// Register page - POST
authController.post('/register', isGuest, async (req, res) => {
    const { username, email, password, rePassword} = req.body;
    
    try {
        const token = await authService.register(username, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.redirect('/');
    } catch (err) {
        const error = getErrorMessage(err);
        
        res.render('auth/register', {title: 'Register', username , email, error})
    }
})


// Login page - GET
authController.get('/login',isGuest, (req, res) => {
    res.render('auth/login', {title: 'Login'})
})


// Login page - POST
authController.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const token =  await authService.login( username, password);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
        res.redirect('/')
    } catch (err) {
        const error = getErrorMessage(err)
        res.render('auth/login', {title: 'Login' , username, error})
    }
})


// Logout page - GET
authController.get('/logout',  isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
})


export default authController;