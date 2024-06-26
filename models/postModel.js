import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Post = model('Post', postSchema);

export default Post;