const userModel = require('../models/userModel');
const { errorHandle, successHandle } = require('../base/responseHandler');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const dateValidator = (date) => {
    if (!date) return "Server Date: " + new Date().toUTCString();
    const dateRegex = /^(Sun|Mon|Tue|Wed|Thu|Fri|Sat),\s\d{1,2}\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT$/;
    if (!dateRegex.test(date)) return "Server Date: " + new Date().toUTCString();
    return "Request-Date: " + date;
}

const UserController = {
    getUser: async (req, res) => {
        //validation
        const id = req.query.id;
        if (!id || !validator.isInt(id)) {
            return errorHandle(res, 400, 40001);
        }

        const result = await userModel.getById(id);
        if (result.length === 0) {
            return errorHandle(res, 400, 40003);
        }
        else {
            let data = {
                user: result[0],
                date: dateValidator(req.headers['request-date'])
            }
            return successHandle(res, "查詢 User Id: " + req.query.id + " 成功 ", data);
        }
    },
    newUser: async (req, res) => {
        //validation
        let { name, email, password } = req.body;
        if (!name || !email || !password) {
            return errorHandle(res, 400, 40001);
        }

        if (!validator.isEmail(email)) {
            return errorHandle(res, 400, 40001);
        }

        if (RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-={}[\]:;'<>,.?\/]).*$/).test(password) === false) {
            return errorHandle(res, 400, 40004);
        }

        let checkEmailDuplicate = await userModel.getByEmail(email);
        if (checkEmailDuplicate[0]) {
            return errorHandle(res, 400, 40002);
        }

        password = await bcrypt.hash(password, 12);

        let result = await userModel.create({ name, email, password });
        let data = {
            user: {
                "id": result.insertId,
                "name": name,
                "email": email,
            },
            date: dateValidator(req.headers['request-date'])
        }
        successHandle(res, "新增 User 成功", data);
    }
}

module.exports = UserController;
