import userModel from "../models/user.model.js";
import tokenBlacklistModel from "../models/blacklist.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 // 1 day
}

async function loginUser(req, res) {
    const { userid, password } = req.body;
    const user = await userModel.findOne({$or: [ {email: userid}, {username: userid}] });
    if (!user) {
        return res.status(400).json({message: "User not found"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({message: "Invalid password"});
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d"
    });

    res.cookie("token", token, options);

    return res.status(200).json({ message: "Login successful", token });
}

async function getUser(req, res) {
    const user = await userModel.findById(req.user.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user: {
        id: user._id,
        username: user.username,
        email: user.email
    } });
}

async function logoutUser(req, res) {
    const token = req.cookies.token;
    if (token) {
        await tokenBlacklistModel.create({ token });
    }
    res.clearCookie("token", options);
    return res.status(200).json({ message: "Logout successful" });
}

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const isUserExists = await userModel.findOne({ $or: [{username}, {email}] });
    if (isUserExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = new userModel({ username, email, password: hash });

    await newUser.save();
    const token  = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    });

    newUser.password = undefined; // Remove password from the response

    res.status(201).json({ message: "User registered successfully", newUser, token });
}

export { registerUser, loginUser, logoutUser, getUser };