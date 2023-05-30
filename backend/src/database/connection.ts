import knex from 'knex';

const db = knex({
    client: '',
    connection: {
        host: '',
        user: '',
        password: '',
        database: ''
    },
    useNullAsDefault: true,
});

export default db;
