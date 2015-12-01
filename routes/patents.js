var express = require('express');
var router = express.Router();
var jsonParser = require('body-parser').json();
var db = require('../db').get();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.serialize(function() {
    db.all('SELECT * FROM Patent INNER JOIN Company ON Patent.companyID = Company.companyID INNER JOIN CoffeeProduct ON Patent.id = CoffeeProduct.id', function(err, rows) {
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
    res.render('patents/all', {
      title: 'Product patented by Companies',
      data: res.data });
  }
});

router.post('/new', function(req, res, next) {
  db.serialize(function() {
    db.run('INSERT INTO CoffeePlantation VALUES (?, ?, ?, ?, ?)',
      [
        req.body.plantionID,
        req.body.contactCP,
        req.body.name,
        req.body.addressCP,
        req.body.companyID
      ],
      function(err) {
        if (err) {
          var error = new Error('There was an SQL error inserting into the db.');
          res.send({
            error: error
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

router.post('/:id/update', jsonParser, function(req, res, next) {
  db.serialize(function() {
    db.run('UPDATE CoffeePlantation ' +
           'SET plantationID = ?, contactCP = ?, name = ?, addressCP = ?, companyID = ? ' +
           'WHERE plantationID = ?',
       [
         req.body.plantationID,
         req.body.contactCP,
         req.body.name,
         req.body.addressCP,
         req.body.companyID,
         req.params.id
       ],
       function(err) {
          if (err) {
            res.send({
              error: err
            });
          }
          else {
            res.send({
              success: true
            });
          }
       }
    );
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
