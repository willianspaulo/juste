import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('product').insert([
        {
            'id': 1,
            'description': 'Sabão em pó',
            'price': 15.85,
            'amount': 12,
            'expirationDate': new Date('12/31/2022'),
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 2,
            'description': 'Amaciante',
            'price': 12.85,
            'amount': 8,
            'expirationDate': new Date('12/31/2022'),
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 3,
            'description': 'Prendedores',
            'price': 1.8,
            'amount': 112,
            'expirationDate': new Date('12/31/3000'),
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 4,
            'description': 'Linguiça toscana (kg)',
            'price': 18.85,
            'amount': 58,
            'expirationDate': new Date('12/31/2020'),
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 5,
            'description': 'Arroz integral',
            'price': 15.85,
            'amount': 12,
            'expirationDate': new Date('12/31/2021'),
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 6,
            'description': 'Feijão',
            'price': 4.85,
            'amount': 50,
            'expirationDate': new Date('12/31/2022'),
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 7,
            'description': 'Coca Cola 2lts',
            'price': 7,
            'amount': 32,
            'expirationDate': new Date('12/31/2022'),
            'creationDate': new Date(),
            'updateDate': new Date()
        },
    ]);
}

// table.increments('id').primary();
// table.string('description').notNullable();
// table.decimal('price').notNullable();
// table.integer('amount').notNullable();
// table.dateTime('expirationDate').notNullable();
// table.dateTime('creationDate').notNullable();
// table.dateTime('updateDate').notNullable();