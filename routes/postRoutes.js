import { Router } from 'express';
import { createPost, getAllPosts } from '../controllers/postControllers.js';

const postRouter = Router();

postRouter.post("/create", createPost);
postRouter.get("/", getAllPosts);

export default postRouter;