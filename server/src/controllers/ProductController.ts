import knex from '../database/connection';
import express from 'express';

class ProductController {
    async index(request: express.Request, response: express.Response) {
        const products = await knex('product')
        .join('categoryProduct', 'product.id', '=', 'categoryProduct.idProduct')
        .join('category', 'categoryProduct.idCategory', '=', 'category.id').select('*');
        //TODO: Na tabela [categoryProduct] e na tabela [category] tem campos em comum: idCategory. RESOLVER: Serialize pode ajudar.
        return response.json(products);
    }
};

export default ProductController;