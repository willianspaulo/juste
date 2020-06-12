import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary();
        table.string('identifier').notNullable();
        table.string('note').notNullable();
        table.dateTime('manufacturingDate').notNullable();
        table.dateTime('expirationDate').notNullable();
        table.dateTime('creationDate').notNullable();
        table.dateTime('updateDate').notNullable();
    })
 };

export async function down(knex: Knex) { 
    return knex.schema.dropTable('product');
};