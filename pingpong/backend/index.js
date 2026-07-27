import express from "express";
import { Client } from "pg";

const PORT = Number(process.env.PORT);
const app = express();

const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT),
});

await client.connect();
console.log("Postgres connected!");

app.get("/pingpong", async (req, res) => {
  try {
    const result = await client.query(`
      UPDATE ping
      SET count = count + 1
      RETURNING count
    `);

    res.send(`Ping / Pongs: ${result.rows[0].count}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
