const db = require('../base/db');

const userModel = {
    getById: async (id) => {
        const [rows, fields] = await db.execute(
            'SELECT id, name, email FROM user WHERE id = ?',
            [id]
        );
        return rows;
    },
    getByEmail: async (email) => {
        const [rows, fields] = await db.execute(
            'SELECT email FROM user WHERE email = ?',
            [email]
        );
        return rows;
    },
    create: async ({ name, email, password }) => {
        const [rows, fields] = await db.execute(
            'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
            [name, email, password],
        );
        return rows;
    }
}

module.exports = userModel;