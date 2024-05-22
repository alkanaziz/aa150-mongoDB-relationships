import { Router } from 'express';
import { createUser, getAllUsers, getSingleUser } from '../controllers/userController.js';

const userRouter = Router();

userRouter.post("/create", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:userId", getSingleUser);

export default userRouter;