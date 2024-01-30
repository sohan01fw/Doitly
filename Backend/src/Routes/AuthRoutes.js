import express from "express";
import { Signup } from "../Controller/AuthController";

export const authRouter = express.Router();

authRouter.route("/signup", Signup);
