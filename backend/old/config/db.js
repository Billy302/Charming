const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Current-Root-Password',
    database: 'charming',
});

module.exports = connection;
