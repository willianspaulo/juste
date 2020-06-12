import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('variation', table => {
        table.increments('id').primary(),
        table.integer('amount').notNullable(),
        table.decimal('price').notNullable(),
        table.integer('idVariationType').notNullable(),
        table.string('valueVariation').notNullable(),
        table.dateTime('creationDate').notNullable();
        table.dateTime('updateDate').notNullable();
        
    })
 };

export async function down(knex: Knex) { 
    return knex.schema.dropTable('variation');
};