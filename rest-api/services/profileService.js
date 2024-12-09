import Book from "../models/Book.js";
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
        // Do something with the uploads
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

const profileService = {
    uploadByUser,
    profileData,
    updateCart
}

export default profileService;