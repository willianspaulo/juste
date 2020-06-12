import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('variationType', table => {
        table.increments('id').primary();
        table.string('description').notNullable();
        table.string('observation').notNullable();
        table.dateTime('creationDate').notNullable();
        table.dateTime('updateDate').notNullable();
        
    })
 };

export async function down(knex: Knex) { 
    return knex.schema.dropTable('variationType');
};