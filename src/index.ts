import express, {Request, Response, NextFunction } from 'express';
import usersRouter from './routes/users.routes';

const app = express();

app.use(usersRouter);

app.get('/status', (req: Request, res:Response, next: NextFunction) => {
  res.status(200).send({ message: 'Resolution Completed' });
});

app.listen(3000, () => {
  console.log("Executando a porta 3000")
});