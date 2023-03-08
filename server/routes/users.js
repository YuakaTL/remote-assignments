var express = require('express');
var router = express.Router();

const { getUser, newUser } = require('../controllers/userController');

router.get('/', getUser);

router.post('/', newUser);

module.exports = router;