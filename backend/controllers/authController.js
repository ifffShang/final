import User from "../models/user.js"
import { hashPassword, comparePassword } from "../helpers/auth.js";

export const test = async (req, res) => {
    res.json('test is working.');
}

// register endpoint
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check if name was entered
        if (!name) {
            return res.json({
                error: 'Name is required'
            })
        };

        // check is password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };

        // check email
        const exist = await User.findOne({email});
        if (exist) {
            return res.json({
                error: 'Email has been taken'
            })
        }

        // hash password

        const hashedPassword = await hashPassword(password);
        
        // create the user
        const user = await User.create({ name, email, password: hashedPassword });
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        // res.cookie("token", token, { httpOnly: true }).json({
        //     message: "User registered successfully",
        //     user: { username: user.username },
        // });
        return res.json(user)
    } catch (err) {
        res.status(400).json({ message: "User registration failed", error: err.message });
    }
}

// login endpoint
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: "Invalid email" });
        }

        // check if password match
        const match = await comparePassword(password, user.password);
        
        if (match) {
            return res.json({ message: "Login succussfully" });
        } else {
            return res.json({ error: "Invalid password" });
        }
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        // res.cookie("token", token, { httpOnly: true }).json({
        //     message: "Login successful",
        //     user: { username: user.username },
        // });
    } catch (err) {
        res.json({ message: "Login failed", error: err.message });
    }
}

export const logout = async (req, res) => {
    res.clearCookie("token").json({ message: "Logout successful" });
}