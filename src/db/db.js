const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "postgres",
    database: "railway",
    host: "containers-us-west-107.railway.app",
    password: "36HJkwMouocNZ2fTCmOH",
    port: "7426",
});

module.exports = pool;
