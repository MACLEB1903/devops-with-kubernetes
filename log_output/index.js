import express from "express";

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  const uuid = crypto.randomUUID();
  const now = new Date();

  res.send(`${now.toISOString()}: ${uuid}`);
});

app.listen(3000, () => {
  console.log(`Server is running on ${PORT}.`);
});
