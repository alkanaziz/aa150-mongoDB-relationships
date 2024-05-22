import { Router } from 'express';
import { createPost } from '../controllers/postControllers.js';

const postRouter = Router();

postRouter.post("/create", createPost);

export default postRouter;