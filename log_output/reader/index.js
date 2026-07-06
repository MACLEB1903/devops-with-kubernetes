import fs from "fs";
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const FILES_DIR = process.env.FILES_DIR;
const GENERATOR_FILE_NAME = process.env.GENERATOR_FILE_NAME;
const PINGPONG_FILE_NAME = process.env.PINGPONG_FILE_NAME;

const generatorFilePath = path.join(FILES_DIR, GENERATOR_FILE_NAME);
const pingpongFilePath = path.join(FILES_DIR, PINGPONG_FILE_NAME);

const app = express();

app.get("/", async (req, res) => {
  try {
    const genData = await fs.promises.readFile(generatorFilePath, "utf8");
    const pingData = await fs.promises.readFile(pingpongFilePath, "utf8");

    res.type("html").send(`
      <meta http-equiv="refresh" content="5">
      <pre>${genData}</pre>
      <pre>Ping / Pongs: ${pingData}</pre>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("Log file not ready yet.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
