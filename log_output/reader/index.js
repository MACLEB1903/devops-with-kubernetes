import fs from "fs";
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const app = express();

app.get("/", async (req, res) => {
  try {
    const genResponse = await fetch("http://localhost:3001/");
    const pingResponse = await fetch("http://pingpong-svc:2345/pingpong");

    const genData = await genResponse.json();
    const pingData = await pingResponse.json();

    res.type("text").send(`${genData}\n${pingData}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
