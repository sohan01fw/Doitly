import express from "express";
import cors from "cors";
import { TodosRouter } from "./Routes/TodoRoutes";
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/api/user", TodosRouter);

app.listen(port, () => {
  console.log("Server is running on port,", port);
});
