import { Router } from "express";
import jwt from "jsonwebtoken"
import profileService from "../services/profileService.js";
import authenticateToken from "../middlewares/authenticate.js";
import User from "../models/User.js";
import bookService from "../services/bookService.js";

const profileController = Router();


// Home Page - GET
profileController.get('/profile',authenticateToken,  async (req, res) =>{
    const userId = req.user
    const userData = await User.findById(userId, { password: 0, __v: 0 }).lean();

    
    res.status(200).json(userData);
});

profileController.get('/cart/data',authenticateToken,  async (req, res) =>{

    try {
        const userId = req.user;
            const userCart = await User.findById(userId)
   
        const returnBookData = await bookService.returnBookData(userCart.cart)
        
        res.status(200).json(returnBookData);
        
    } catch (error) {
        throw new Error(`Failed to load cart data`, error);
                
        res.status(500).json(error);

        
    }
});


profileController.get('/userdata' , async (req, res) => {
    const userId = req.query.userId;
    try {
        const [userUploads, userData] = await Promise.all([
            profileService.uploadByUser(userId),  
            profileService.profileData(userId)   
        ]);
  

        res.status(200).send({ userdata: userData, uploads: userUploads.length });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while fetching data.' });
    }

})

profileController.post('/cart', async (req, res) => {
    const {bookId, ownerId } = req.body
    const updUser = await profileService.updateCart(bookId, ownerId)
    return updUser
    
 })

 
profileController.post('/order', async (req, res) => {
    const {userId, orderData , totalPrice} = req.body
    const placedOrder = await profileService.placeOrder(userId, orderData , totalPrice)
    res.status(200).send({userId, orderData , totalPrice})
 })

  
profileController.get('/order/:orderId', async (req, res) => {
    const {orderId} = req.params    
    const orderDetails = await profileService.getOneOrder(orderId)

    res.status(200).send(orderDetails)
 })

export default profileController;

