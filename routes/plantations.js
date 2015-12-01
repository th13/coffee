var express = require('express');
var router = express.Router();
var db = require('../db').get();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.serialize(function() {
    db.all('SELECT * FROM CoffeePlantation', function(err, rows) {
      if (err) {
        res.err = new Error('There was a SQL error.');
        next();
      }

      res.data = rows;
      next();
    });
  });
}, function(req, res, next) {
  if (res.err) {
    res.render('error', { error: res.err });
  }
  else {
    res.render('plantations/all', {
      title: 'Coffee Plantations',
      data: res.data });
  }
});

router.get('/add', function(req, res, next) {
  res.render('plantations/add', {
    title: 'Add Plantation'
  });
});

router.post('/:id/delete', function(req, res, next) {
  db.serialize(function() {
    db.run('DELETE FROM CoffeePlantation WHERE plantationID = ?', req.params.id, function(err) {
      if (err) {
        res.send({
          success: false
        });
      }
      else {
        res.send({
          success: true
        });
      }
    });
  });
});

module.exports = router;
