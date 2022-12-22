const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "postgres",
    database: "railway",
    host: "containers-us-west-107.railway.app",
    password: "ww0xpgYrb1ngFVfy5Efk",
    port: "7426",
});

module.exports = pool;
