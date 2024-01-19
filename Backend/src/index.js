import express from "express";
import cors from "cors";
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get("/todos", (req, res) => {
  res.json([
    { title: "hello world" },
    { title: "hello world" },
    { title: "hello world" },
    { title: "hello world" },
  ]);
});

app.listen(port, () => {
  console.log("Server is running on port,", port);
});
