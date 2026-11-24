import fs from "node:fs";
import express from "express";

const PORT = process.env.PORT;
const app = express();

app.get("/", async (req, res) => {
  try {
    const data = fs.readFileSync("log.txt", "utf-8");
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error reading file.");
  }
});

app.listen(PORT, () => {
  console.log("Log Reader started.");
  console.log(`Server is runnig on port: ${PORT}`);
});
