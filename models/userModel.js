import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, { timestamps: true });

const User = model('User', userSchema);

export default User;