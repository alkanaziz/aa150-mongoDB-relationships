import User from "../models/userModel.js";

const createUser = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newUser = await User.create({ name });
        res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find().populate('posts');
        res.status(200).json({ message: "All users fetched successfully", allUsers });
    } catch (error) {
        next(error);
    }
};

const getSingleUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('posts');
        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }

        res.status(200).json({ message: "User fetched successfully", user });
    } catch (error) {
        next(error);
    }
};

export { createUser, getAllUsers, getSingleUser };