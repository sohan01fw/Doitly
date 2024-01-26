import express from "express";

const userRouter = express.Router();

userRouter.route("/getUsers").get();
userRouter.route("/create-user").post();
userRouter.route("/update-user").patch();
userRouter.route("/delete-user").delete();
