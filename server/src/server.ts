import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    return response.json([
        'Willians',
        'Darlane',
        'Bianca',
        'Davi',
        'Devanildo'
    ]);
});

app.post('/users', (request, response) => {
    const user = {
        nome: 'Willians P',
        email: 'willians@gmail.com'
    }

    return response.json(user);
});

app.listen(3333);