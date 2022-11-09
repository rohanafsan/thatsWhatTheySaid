const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "dundermifflin",
    database: "officedb",
    password: "keke11EKEK,",
    port: "5432",
});

module.exports = pool;
