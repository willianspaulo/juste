import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    return response.json([
        'Willians',
        'Darlane',
        'Bianca',
        'Davi',
        'Devanildo'
    ]);
});

routes.post('/users', (request, response) => {
    const user = {
        nome: 'Willians P',
        email: 'willians@gmail.com'
    }

    return response.json(user);
});
   
routes.get('/categories', async (request, response) => {
    const categories = await knex('category').select('*');

    return response.json(categories);
});

export default routes;