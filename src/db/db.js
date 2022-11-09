const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "dundermifflin",
    host: "localhost",
    database: "officedb",
    password: "keke11EKEK,",
    port: "5432",
});

module.exports = pool;
