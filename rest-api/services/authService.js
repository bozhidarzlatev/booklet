import jwt from "../lib/jwt.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt';

async function register (username, email,profileImg, password, rePassword) {
    const user = await User.findOne({ $or: [{ email } , { username }] });

    if (password !== rePassword) {
        throw new Error("Password missmatch!");
    }

    if (user) {       
        throw new Error("User already exist");
        
    }

    const newUser = await User.create({
        username, 
        email, 
        profileImg,
        password
    });

    return this.generateToken(newUser)
}

async function login ( username, password) {
    const user = await User.findOne({username})

    if(!user) {
        throw new Error("Invalid credentials");   
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error("Invalid credentials!");
    };

    return this.generateToken(user)

}

async function findProfile({username}) {
   const user = await User.findOne({username}, { password: 0, __v: 0 }).lean()

   return user;
   
}

async function getProfile(req) {
    try {
        const userData = req.cookies.authToken;

        if (!userData) {
            throw new Error('Authentication token is missing');
        }

        const decoded = jwt.verify(userData, process.env.JWT_SECRET);

        return decoded;
    } catch (error) {
        throw new Error('Error decoding token:', error.message);
        return null; 
    }
}

async function generateToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username
    };
    const header = { expiresIn: '2h'}
    const token = await jwt.sign(payload, process.env.JWT_SECRET, header)
    return token;
}

const authService = {
register,
login,
findProfile,
generateToken,
getProfile

}

export default authService;