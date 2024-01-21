import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { TodosRouter } from "./Routes/TodoRoutes.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/api/user", TodosRouter);
app.get("", (req, res) => {
  res.send("hello welcome to doitly");
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
