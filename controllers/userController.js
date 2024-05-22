import User from "../models/userModel.js";

const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = await User.create({ name });
        res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find().populate('posts');
        res.status(200).json({ message: "All users fetched successfully", allUsers });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getSingleUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('posts');
        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }

        res.status(200).json({ message: "User fetched successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export { createUser, getAllUsers, getSingleUser };