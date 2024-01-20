export async function CreateTodos(req, res) {
  console.log(req.body);
}
export async function getTodos(req, res) {
  res.json({ todos: "helo" });
}
