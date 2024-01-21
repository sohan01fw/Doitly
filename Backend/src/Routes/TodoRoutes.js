import express from "express";
import { CreateTodos } from "../Controller/TodosController.js";

export const TodosRouter = express.Router();

TodosRouter.get("/getTodos");
TodosRouter.post("/createTodos", CreateTodos);
