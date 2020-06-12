import express from 'express';

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

export default routes; 