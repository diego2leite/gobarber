import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', async (req, res) => {
    return res.json({
        message: 'Server running...',
    });
});

// routes.get('/', async (req, res) => {
//     const user = await User.create({
//         name: 'Diego',
//         email: 'diego@domob.me',
//         password_hash: '123123',
//     });

//     return res.json(user);
// });

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
