import mongoose from "mongoose";

const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log(`MongoDB connected successfully`);
    } catch (error) {
        console.error("MongDB connection failed", error)
        process.exit(1);
    }
};

export default connectDB;