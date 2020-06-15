import knex from '../database/connection';
import express from 'express';

class UserController {
    async index(request: express.Request, response: express.Response) {
        const categories = await knex('user').select('*');

        return response.json(categories);
    };

    async post(request: express.Request, response: express.Response) {
        const { name, email, phone, password } = request.body;

        //Para usar uma transaction e só substituir o "knex" pela const "trx" criada nesta linha.
        //const trx = await knex.transaction();

        //Caso eu queira cadastrar uma dependencia, posso salvar o return da requisição em uma variável (Me retorna uma lista de IDs de registro)
        //Ex: [const insertedIds = await knex('user').insert({...]
        await knex('user').insert({
            name,
            email,
            phone,
            password,
            creationDate: new Date(),
            updateDate: new Date()
        });

        return response.end('Cadastro de usuário. OK!');
    };
};

export default UserController;