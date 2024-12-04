import User from "../models/User.js";

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



const profileService = {

}

export default profileService;