import express from "express";
import { Signup } from "../Controller/AuthController.js";

export const authRouter = express.Router();

authRouter.route("/signup").post(Signup);
