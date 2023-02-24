const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const DB = {
    host: process.env.DB_Host,
    user: process.env.DB_User,
    database: process.env.DB_Database,
    password: process.env.DB_Password,
}

// create the connection to database
const connection = mysql.createConnection(DB);

module.exports = connection;