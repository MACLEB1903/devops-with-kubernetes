import fs from "fs";
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const FILES_DIR = process.env.FILES_DIR;
const FILE_NAME = process.env.FILE_NAME;

const filePath = path.join(FILES_DIR, FILE_NAME);
const app = express();
let pingCount = 0;

app.get("/pingpong", (req, res) => {
  pingCount++;
  fs.writeFile(filePath, String(pingCount), "utf-8", (err) => {
    if (err) console.error(err);
  });
  res.send(`Ping / Pongs: ${pingCount}`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
