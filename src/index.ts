import express, {Request, Response, NextFunction } from 'express';
import usersRouter from './routes/users.routes';
import statusRouter from './routes/status.routes';
const app = express();

// Configuracao da aplicacao
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuracao de Rotas
app.use(usersRouter);
app.use(statusRouter);

// Inicializacao da porta do Servidor
app.listen(3000, () => {
  console.log("Executando a porta 3000")
});