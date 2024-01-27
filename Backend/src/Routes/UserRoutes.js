import express from "express";
import {
  createUserController,
  getUserController,
} from "../Controller/UserController.js";

export const userRouter = express.Router();

userRouter.route("/get-user").get(getUserController);
userRouter.route("/create-user").post(createUserController);
userRouter.route("/update-user").patch();
userRouter.route("/delete-user").delete();
