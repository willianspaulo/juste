import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('categoryProduct').insert([
        {
            'idProduct': 1,
            'idCategory': 7,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'idProduct': 2,
            'idCategory': 7,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'idProduct': 3,
            'idCategory': 6,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'idProduct': 4,
            'idCategory': 1,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'idProduct': 5,
            'idCategory': 3,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'idProduct': 6,
            'idCategory': 8,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'idProduct': 7,
            'idCategory': 3,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
    ]);
}

// table.integer('idProduct').notNullable().references('id').inTable('product');
// table.integer('idCategory').notNullable().references('id').inTable('category');

// table.increments('id').primary();
// table.string('description').notNullable();
// table.decimal('price').notNullable();
// table.integer('amount').notNullable();
// table.dateTime('expirationDate').notNullable();
// table.dateTime('creationDate').notNullable();
// table.dateTime('updateDate').notNullable();