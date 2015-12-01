var express = require('express');
var router = express.Router();
var jsonParser = require('body-parser').json();
var db = require('../db').get();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.serialize(function() {
    db.all('SELECT * FROM Prefer ' +
           'INNER JOIN CoffeeProduct ON Prefer.productID = CoffeeProduct.id',
      function(err, rows) {
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
    res.render('prefers/all', {
      title: 'Client Coffee Preferences',
      data: res.data });
  }
});

router.post('/new', function(req, res, next) {
  db.serialize(function() {
    db.run('INSERT INTO CoffeeProduct(name, roastType, price) VALUES (?, ?, ?)',
      [
        req.body.name,
        req.body.roastType,
        req.body.price
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
    db.run('UPDATE CoffeeProduct ' +
           'SET name = ?, roastType = ?, price = ? ' +
           'WHERE id = ?',
       [
         req.body.name,
         req.body.roastType,
         req.body.price,
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
    db.run('DELETE FROM CoffeeProduct WHERE id = ?', req.params.id, function(err) {
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
