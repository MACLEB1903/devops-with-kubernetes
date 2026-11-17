import express, { type Express, type Request, type Response } from "express";

const PORT = process.env.PORT;
const app: Express = express();

let pong = 0;

app.get("/pingpong", (req: Request, res: Response) => {
  pong++;
  res.send(`PONG: ${pong}`);
});

app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});
