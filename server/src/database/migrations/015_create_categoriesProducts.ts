import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('categoryProduct', table => {
        table.integer('idProduct').notNullable();//.references('id').inTable('product');
        table.integer('idCategory').notNullable();//.references('id').inTable('category');
        table.dateTime('creationDate').notNullable();
        table.dateTime('updateDate').notNullable();
    })
 };

export async function down(knex: Knex) { 
    return knex.schema.dropTable('categoryProduct');
};