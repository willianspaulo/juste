import express from 'express';
import CategoryContoller from './controllers/CategoryController';
import UserController from './controllers/UserController';
import ProductController from './controllers/ProductController';

const routes = express.Router();
const userController = new UserController();
const categoryContoller = new CategoryContoller();
const productController = new ProductController();

   
routes.get('/users', userController.index);
routes.post('/users', userController.post);

routes.get('/categories', categoryContoller.index);

routes.get('/products', productController.index);

export default routes;