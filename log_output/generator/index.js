import fs from "fs";
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const app = express();

const id = crypto.randomUUID();
const date = new Date().toISOString();
const content = `${date}: ${id}`;

app.get("/", (req, res) => {
  res.json(content);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
