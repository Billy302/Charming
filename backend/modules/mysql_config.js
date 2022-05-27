require('dotenv').config();
const mysql = require('mysql2');

// 連結MySQL
const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DB,
    connectionLimit:10,
    waitForConnections:true,
})

module.exports = pool.promise();