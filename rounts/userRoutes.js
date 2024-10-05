import { Router } from "express";
import {
  getUserById,
  getUsers,
  createUser,
} from "../controllers/userController.js";

const userRouter = Router();

// GET request for getting all the users
userRouter.get("/", getUsers);

// POST request for creating a user
userRouter.post("/", createUser);

// GET request for getting the user by id
userRouter.get("/:id", getUserById);

export default userRouter;
