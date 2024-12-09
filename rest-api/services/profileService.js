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
    const user = await User.findById(userId, { password: 0, __v: 0 }).lean()
 
    return user;
    
 }

const profileService = {
    uploadByUser,
    profileData
}

export default profileService;