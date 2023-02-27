var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).json({
    'status': 'ok',
    'date': new Date().toUTCString()
  })
})

router.get('/healthcheck', function (req, res, next) {
  res.status(200).json({
    'status': 'ok'
  })
})

module.exports = router;
