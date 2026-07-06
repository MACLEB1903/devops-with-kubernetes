import fs from "fs";
import path from "path";

const FILES_DIR = process.env.FILES_DIR;
const FILE_NAME = process.env.FILE_NAME;

const filePath = path.join(FILES_DIR, FILE_NAME);

setInterval(() => {
  const id = crypto.randomUUID();
  const date = new Date().toISOString();

  const content = `${date}: ${id}`;

  fs.writeFile(filePath, content, "utf-8", (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 5000);
