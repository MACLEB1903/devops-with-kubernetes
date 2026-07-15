import fs from "fs";
import path from "path";
import express from "express";

const PORT = process.env.PORT;
const app = express();

let pingCount = 0;

app.get("/pingpong", (req, res) => {
  pingCount++;
  res.json(`Pings: ${pingCount}`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
