import express from "express";

const PORT = process.env.PORT;
const app = express();

const todos = [];
app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const body = req.body;
  todos.push(body);
  res.status(201).send("Todo added succesfully.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
