const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'bFriend_DB',
    connectionLimit: 10,
    port: 3307
});

async function testConnection() {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("Connected to the database!");

        const result = await conn.query("SHOW TABLES;");
        console.log("Tables in the database:", result);

        const accountResult = await conn.query("SELECT * FROM account;");
        console.log("Account table contents:", accountResult);
    } catch (err) {
        console.error("Unable to connect to the database:", err);
    } finally {
        if (conn) await conn.release();
    }
}

testConnection();
