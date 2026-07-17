import fs from "fs";
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const app = express();

const hash = crypto.randomUUID();
const date = new Date().toISOString();
const dateAndHash = `${date}: ${hash}`;

app.get("/", (req, res) => {
  res.json(dateAndHash);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
