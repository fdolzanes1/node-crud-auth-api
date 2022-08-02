import { Router } from "express";


const usersRouter = Router();

usersRouter.get('/', (req, res, next) => {
  const users = [{ userName: 'John', email: 'john@mail.com' }];
  res.status(200).send({ users });
});

export default usersRouter;
