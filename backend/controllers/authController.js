export const test = async (req, res) => {
    res.json('test is working.');
}

import User from "../models/user.js"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check if name was entered
        if (!name) {
            return res.json({
                error: 'name is required'
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
        
        // create the user
        const user = await User.create({ name, email, password });
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

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true }).json({
            message: "Login successful",
            user: { username: user.username },
        });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err.message });
    }
}

export const logout = async (req, res) => {
    res.clearCookie("token").json({ message: "Logout successful" });
}