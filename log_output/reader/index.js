import fs from "fs/promises";
import express from "express";

const PORT = process.env.PORT;
const MESSAGE = process.env.MESSAGE;

const GENERATOR_URL = process.env.GENERATOR_URL;
const PINGPONG_URL = process.env.PINGPONG_URL;
const INFO_CONFIG_PATH = process.env.INFO_CONFIG_PATH;

const app = express();

app.get("/", async (req, res) => {
  try {
    const infoResponse = await fs.readFile(INFO_CONFIG_PATH, "utf8");
    const genResponse = await fetch(GENERATOR_URL);
    const pingResponse = await fetch(PINGPONG_URL);

    const genData = await genResponse.json();
    const pingData = await pingResponse.json();

    res.type("text").send(
      `file content: ${infoResponse.trim()}
env variable: MESSAGE=${MESSAGE}
${genData}
${pingData}`,
    );
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
