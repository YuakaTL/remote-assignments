const db = require('../base/db');

const userModel = {
    getById: (id, callback) => {
        db.query(
            'SELECT id, name, email FROM user WHERE id = ?', [id], callback
        );
    },
    getByEmail: (email, callback) => {
        db.query(
            'SELECT email FROM user WHERE email = ?', [email], callback
        );
    },
    create: ({ name, email, password }, callback) => {
        db.query(
            'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
            [name, email, password],
            callback
        );
    }
}

module.exports = userModel;