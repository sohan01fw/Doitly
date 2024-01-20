import express from "express";
import cors from "cors";
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get("/getTodos", (req, res) => {
  res.json([
    { todos: "hello world" },
    { todos: "hello world" },
    { todos: "hello world" },
    { todos: "hello world" },
  ]);
});
app.post("/createTodo", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log("Server is running on port,", port);
});
