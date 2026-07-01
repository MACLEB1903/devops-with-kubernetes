import express from "express";

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}.`);
});

app.get("/", (req, res) => {
  res.send("This app is built with ClusterIP and Ingress.");
});
