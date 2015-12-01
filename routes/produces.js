var express = require('express');
var router = express.Router();
var jsonParser = require('body-parser').json();
var db = require('../db').get();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.serialize(function() {
    db.all('SELECT * FROM Produces INNER JOIN CoffeePlantation c ON Produces.plantationID = c.plantationID INNER JOIN CoffeeProduct p ON Produces.id = p.id', function(err, rows) {
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
    res.render('produces/all', {
      title: 'Coffee Products Produced by Plantations',
      data: res.data });
  }
});

router.post('/new', function(req, res, next) {
  db.serialize(function() {
    db.run('INSERT INTO Produces(plantation, productID) VALUES (?, ?)',
      [
        req.body.plantation,
        req.body.productID,
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