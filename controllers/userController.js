const userModel = require('../models/userModel');
const { errorHandle, successHandle } = require('../base/responseHandler');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const UserController = {
    getUser: async (req, res) => {
        const id = req.query.id;
        userModel.getById(id, (err, results) => {
            if (err) return console.log(err);
            let data = {
                user: results[0],
                date: new Date().toUTCString()
            }
            if (results.length === 0) return errorHandle(res, 400, 40003);
            successHandle(res, "查詢 User Id: " + req.query.id + "成功 ", data);
        })
    },
    newUser: async (req, res) => {
        try {
            //validation
            let { name, email, password } = req.body;
            if (!name || !email || !password) {
                return errorHandle(res, 400, 40001);
            }

            if (!validator.isEmail(email)) {
                return errorHandle(res, 400, 40001);
            }

            if (RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d|.*[~!@#$%^&*()_\-+={}\[\]:;"<,>.?\/]).*$/).test(password) === false) {
                return errorHandle(res, 400, 40004);
            }

            userModel.getByEmail(email, (err, results) => {
                if (err) return console.log(err);
                let user = results[0];
                if (user) {
                    return errorHandle(res, 400, 40002);
                }
                password = bcrypt.hash(password, 12).then((hash) => {
                    userModel.create({ name, email, password: hash }, (err, results) => {
                        if (err) return console.log(err);
                        let data = {
                            user: {
                                "id": results.insertId,
                                "name": name,
                                "email": email,
                            },
                            date: new Date().toUTCString()
                        }
                        successHandle(res, "新增 User 成功", data);
                    })
                })
            })
        } catch (err) {
            return errorHandle(res);
        }
    }
}

module.exports = UserController;
