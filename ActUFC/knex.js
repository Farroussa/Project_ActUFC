const knex = require('knex')({
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 6960,
      user: 'postgres',
      password: '22042003',
      database: 'ActUFC'
    }
  });
  
module.exports = knex;

