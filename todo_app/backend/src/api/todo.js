import express from "express";
import { Client } from "pg";

const PORT = process.env.PORT;
const app = express();

const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT),
});

await client.connect();
app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    const { title } = req.body;

    if (title.length > 140) {
      console.warn(`Error: todo length should not be greater than 140`);
      return res
        .status(400)
        .json({ error: "Todo title cannot exceed 140 characters." });
    }

    const newTodo = await client.query(
      "INSERT INTO todos (title) VALUES($1) RETURNING *",
      [title],
    );

    res.status(201).send("Todo added succesfully.");
  } catch (error) {
    console.error(error);
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await client.query("SELECT * FROM todos");
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
