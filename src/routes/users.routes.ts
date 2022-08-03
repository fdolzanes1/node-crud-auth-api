import { Router } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRouter = Router();

usersRouter.get('/users', (req, res, next) => {
  const users = [{ userName: 'John', email: 'john@mail.com' }];
  res.status(StatusCodes.OK).send({ users });
});

usersRouter.get('/users/:uuid', (req, res, next) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({ "uuid": uuid});
});

usersRouter.post('/users', (req, res, next) => {
  const newUser = req.body;
  res.status(StatusCodes.CREATED).send(newUser);
});

export default usersRouter;
