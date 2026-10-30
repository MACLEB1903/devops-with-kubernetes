import express, { type Express, type Request, type Response } from "express";

const PORT = process.env.PORT;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`Server started in port ${PORT}`);
});

app.listen(PORT);
