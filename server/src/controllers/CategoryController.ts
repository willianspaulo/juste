import knex from '../database/connection';
import express from 'express';

class CategoryController {
    async index(request: express.Request, response: express.Response) {
        const categories = await knex('category').select('*');

        return response.json(categories);
    }
};

export default CategoryController;