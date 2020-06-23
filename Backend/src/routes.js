import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'daniel',
    email: 'daniel@gmail.com',
    password_hash: '22525',
  });

  return res.json(user);
});

export default routes;
