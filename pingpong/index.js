import express from "express";

const PORT = process.env.PORT;
const app = express();

let count = 0;

app.get("/", (req, res) => {
  res.send(`Ping this app with /pingpong.`);
});

app.get("/pingpong", (req, res) => {
  count++;
  res.send(`You visited this endpoint ${count} times.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
