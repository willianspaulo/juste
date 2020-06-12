import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('category', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('observation');
        table.integer('idCategory');
        table.dateTime('creationDate').notNullable();
        table.dateTime('updateDate').notNullable();
    })
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('category');
};