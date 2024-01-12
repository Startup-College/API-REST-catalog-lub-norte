import { usersControllers } from '../controllers/usersControllers.js';

export const usersRoutes = async (app) => {
  app.post('/register',  usersControllers.register);
  app.post('/login', usersControllers.login)
};
