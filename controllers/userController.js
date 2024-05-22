import User from "../models/userModel.js";

const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = await User.create({ name });
        res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { createUser };