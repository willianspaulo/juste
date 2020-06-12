import path from 'path';
module.exports = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'juste',
        password: '123456',
        database: 'test'
    },
    //client: 'sqlite3',
    // connection: {
    //     filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    // },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};