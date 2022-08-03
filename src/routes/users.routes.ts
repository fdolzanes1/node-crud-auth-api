import { Router } from "express";


const usersRouter = Router();

usersRouter.get('/users', (req, res, next) => {
  const users = [{ userName: 'John', email: 'john@mail.com' }];
  res.status(200).send({ users });
});

usersRouter.get('/users/:uuid', (req, res, next) => {
  const uuid = req.params.uuid;
  res.status(200).send({ "uuid": uuid});
});

export default usersRouter;
