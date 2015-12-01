var express = require('express');
var router = express.Router();
var db = require('../db').get();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

module.exports = router;
