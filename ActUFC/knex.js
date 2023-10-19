const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'mdp',
      database: 'ActUFC'
    }
  });
  
module.exports = knex;

