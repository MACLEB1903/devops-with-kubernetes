import express from "express";

const PORT = process.env.PORT;
const app = express();

const now = new Date();
const uuid = crypto.randomUUID();
const log = `${now.toISOString()}: ${uuid}`;

app.get("/", (req, res) => {
  res.send(log);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
