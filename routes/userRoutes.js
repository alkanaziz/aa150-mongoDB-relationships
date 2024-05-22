import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/userController.js';

const userRouter = Router();

userRouter.post("/create", createUser);
userRouter.get("/", getAllUsers);

export default userRouter;