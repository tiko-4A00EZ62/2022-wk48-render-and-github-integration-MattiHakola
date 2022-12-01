const mysql = require("mysql");
require("dotenv").config();

module.exports = mysql.createPool({
    connectionLimit: 5,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
