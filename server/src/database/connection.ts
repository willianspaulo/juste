import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'juste',
        password: '123456',
        database: 'test'
    },
    //client: 'sqlite3',
    // connection: {
    //     filename: path.resolve(__dirname, 'database.sqlite'),
    // },
});

export default connection;