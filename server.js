import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

const dbURL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT;

connectDB(dbURL);

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));