import express from 'express';
import CategoryContoller from './controllers/CategoryController';
import UserController from './controllers/UserController';

const routes = express.Router();
const userController = new UserController();
const categoryContoller = new CategoryContoller();

   
routes.get('/users', userController.index);
routes.post('/users', userController.post);

routes.get('/categories', categoryContoller.index);

export default routes;