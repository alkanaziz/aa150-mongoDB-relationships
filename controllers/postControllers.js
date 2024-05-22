import Post from "../models/postModel.js";
import User from "../models/userModel.js";

const createPost = async (req, res) => {
    try {
        const { userId, title } = req.body;

        const existingUser = await User.findById(userId);
        if(!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const newPost = await Post.create({ title, user: userId });
        existingUser.posts.push(newPost._id);
        await existingUser.save();

        res.status(201).json({ message: "Post created successfully", newPost });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { createPost };