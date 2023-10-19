const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "22042003",
    host: "localhost",
    port: 6960,
    database: "ActUFC"
});

module.exports = pool;

