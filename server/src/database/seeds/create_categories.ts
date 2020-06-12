import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('category').insert([
        {
            'id': 1,
            'name': 'Açougue e Peixaria',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 2,
            'name': 'Bebês e Crianças ',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 3,
            'name': 'Bebidas ',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 4,
            'name': 'Cultura e Lazer',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 5,
            'name': 'Frutas',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 6,
            'name': 'Higiene Pessoal',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 7,
            'name': 'Limpeza',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 8,
            'name': 'Mercearia',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 9,
            'name': 'Perfumaria',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'id': 10,
            'name': 'Tecnologia',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': null,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        /////////////////////////////////
        {
            'name': 'Bovino',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': 1,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'name': 'Frango',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': 1,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'name': 'Peixe',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': 1,
            'creationDate': new Date(),
            'updateDate': new Date()
        },
        {
            'name': 'Suino',
            'observation': 'Produto focado para a limpeza de casa',
            'idCategory': 1,
            'creationDate': new Date(),
            'updateDate': new Date()
        },

    ]);
}


// table.increments('id').primary();
// table.string('description').notNullable();
// table.dateTime('creationDate').notNullable();
// table.dateTime('updateDate').notNullable();