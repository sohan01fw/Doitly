import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { TodosRouter } from "./Routes/TodoRoutes.js";
import { userRouter } from "./Routes/UserRoutes.js";
import { authRouter } from "./Routes/AuthRoutes.js";
import { encryptMethods } from "./Helpers/encrypt.js";

const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Third-party middleware
app.use(cors());
app.use(cookieParser());

app.get("", (req, res) => {
  res.send("hello welcome to doitly");
});
app.use("/api/v1/todos", TodosRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
