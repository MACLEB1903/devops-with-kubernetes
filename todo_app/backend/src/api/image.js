import fs from "fs";
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const FILES_DIR = process.env.FILES_DIR;
const IMAGE_NAME = process.env.IMAGE_NAME;

const imageFilePath = path.join(FILES_DIR, IMAGE_NAME);

const app = express();

app.get("/image", async (req, res) => {
  res.sendFile(imageFilePath, (error) => {
    if (error) {
      console.error(error);
      res.status(500).send("Cannot find the image.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}.`);
});
