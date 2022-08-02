import express, {Request, Response, NextFunction } from 'express';

const app = express();

app.get('/status', (req: Request, res:Response, next: NextFunction) => {
  res.status(200).send({ message: 'Resolution Completed' });
});

app.listen(3000, () => {
  console.log("Executando a porta 3000")
});