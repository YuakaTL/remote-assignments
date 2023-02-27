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
const promisePool = mysql.createPoolPromise({
    ...DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = promisePool;