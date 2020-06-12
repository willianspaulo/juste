import Knex from 'knex';
import { table } from 'console';

export async function up(knex: Knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary();
        table.string('description').notNullable();
        table.string('note').notNullable();
        table.dateTime('creationDate').notNullable();
        table.dateTime('updateDate').notNullable();
        
    })
 };

export async function down(knex: Knex) { 
    return knex.schema.dropTable('product');
};