// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'mdp',
      database: 'ActUFC',
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'ActUFC',
      user:     'postgres',
      password: 'mdp'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'ActUFC',
      user:     'postgres',
      password: 'mdp'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
