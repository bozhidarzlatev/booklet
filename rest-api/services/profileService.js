import Book from "../models/Book.js";
import Order from "../models/Order.js";
import User from "../models/User.js";

async function register (username, email,profileImg, password, rePassword) {
    const user = await User.findOne({ $or: [{ email } , { username }] });

    if (password !== rePassword) {
        throw new Error("Password missmatch!");
    }

    if (user || email) {       
        throw new Error(`User already exist`);
        
    }

    const newUser = await User.create({
        username, 
        email, 
        profileImg,
        password
    });

    return this.generateToken(newUser)
}


function uploadByUser(userId) {
    return Book.find({ owner: userId })
    .then((uploads) => {
        return uploads;
    })
    .catch((error) => {
        console.error('Error finding books:', error);
        throw error;
    });
}


async function profileData(userId) {
    const user = await User.findById(userId, { password: 0, __v: 0, updatedAt: 0}).lean()
    
    return user;
    
 }

 async function updateCart(bookId, ownerId) {
    
    try {

        const updatedUser = await User.findByIdAndUpdate(
            ownerId,
            { $push: { cart: bookId } },  // Use $push to add bookId to the cart array
            { new: true }  // Return the updated user
        );


        
    } catch (error) {
        console.error('Error updating user:', error);
    }
 }


 async function placeOrder(userId, orderData, price) {
    console.log(`place order: `);
    try {
        const data = await Order.create({totalPrice: price, owner: userId});
        const updateOrder = await Order.updateOne({_id: data._id},  { $set: { orderData: orderData } })
        
        // TO DO
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { orders: data._id } },  // Use $push to add bookId to the cart array
            { new: true }  // Return the updated user
        );

        if (!data) {
            throw new Error("Error placing order!");
            
            
        }
        const userCart = await clearCartData(userId)

        if (userCart) {
            
        }
        
    } catch (error) {
        console.log(`Error clearing cart`, error.message);
        
        throw error
         
    }
 }


async function clearCartData(userId) {
    try {
        const userCart = await User.updateOne({ _id: userId }, { $set: { cart: [] } });

        if (userCart.nModified === 0) {
            throw new Error('User not found or cart already empty');
        }

        console.log('Cart cleared successfully');
    } catch (err) {
        console.error('Error clearing cart:', err.message);
        throw err;
    }
}


async function getOneOrder(orderId) {
    const order = Order.findById(orderId)
    
    return order
}


const profileService = {
    uploadByUser,
    profileData,
    updateCart,
    placeOrder,
    getOneOrder
}

export default profileService;