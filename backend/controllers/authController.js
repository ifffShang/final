export const test = async (req, res) => {
    res.json('test is working.');
}

export const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.create({ username, password });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.cookie("token", token, { httpOnly: true }).json({
            message: "User registered successfully",
            user: { username: user.username },
        });
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