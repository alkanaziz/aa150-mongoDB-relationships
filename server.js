import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

const dbURL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT;

connectDB(dbURL);

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));