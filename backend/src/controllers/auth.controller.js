import userModel from "../models/user.model.js";
async function registerUser(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const isUserExists = await userModel.findOne({ $or: [{username}, {email}] });
    if (isUserExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser 


}

export { registerUser };