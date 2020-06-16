import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('variation', table => {
        table.increments('id').primary(),
        table.integer('amount').notNullable(),
        table.decimal('price').notNullable(),
        table.string('valueVariation').notNullable(),
        table.string('batch').notNullable();
        table.string('batchObservation').notNullable();
        table.dateTime('manufacturingDate').notNullable();
        table.dateTime('expirationDate').notNullable();
        // table.integer('idProduct').notNullable().references('id').inTable('product');
        table.integer('idVariationType').notNullable(),
        // table.integer('idVariation').notNullable().references('id').inTable('variationType');
        table.dateTime('creationDate').notNullable();
        table.dateTime('updateDate').notNullable();
    })
 };

export async function down(knex: Knex) { 
    return knex.schema.dropTable('variation');
};