import fs from "node:fs";
import express from "express";

const PORT = process.env.PORT;
const app = express();

const readFile = async (filename) => {
  return await fs.readFileSync(filename, "utf-8");
};

app.get("/", async (req, res) => {
  try {
    const log = await readFile("log.txt");
    const pong = await readFile("pong.txt");

    res.type("text/plain").send(`${log}\n${pong}`);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log("Log Reader started.");
  console.log(`Server is runnig on port: ${PORT}`);
});
