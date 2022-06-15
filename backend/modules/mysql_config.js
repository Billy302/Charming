require("dotenv").config({path:'../.env'});

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
  waitForConnections: true,
  multipleStatements: true,
});


module.exports = pool.promise();
