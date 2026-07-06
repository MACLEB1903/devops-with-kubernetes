import fs from "fs";
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const FILES_DIR = process.env.FILES_DIR;
const FILE_NAME = process.env.FILE_NAME;

const filePath = path.join(FILES_DIR, FILE_NAME);

const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await fs.promises.readFile(filePath, "utf8");

    res.type("html").send(`
      <meta http-equiv="refresh" content="5">
      <pre>${data}</pre>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("Log file not ready yet.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
