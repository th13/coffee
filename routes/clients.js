var express = require('express');
var router = express.Router();
var db = require('../db').get();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.serialize(function() {
    db.all('SELECT * FROM Client', function(err, rows) {
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
    res.render('clients/all', {
      title: 'Clients',
      data: res.data });
  }
});

router.get('/:id', function(req, res, next) {
  db.serialize(function() {
    db.all('SELECT * FROM Prefer ' +
           'INNER JOIN Client ON Prefer.username = Client.username ' +
           'INNER JOIN CoffeeProduct ON Prefer.productID = CoffeeProduct.id ' +
           'WHERE Prefer.username = ?',
      req.params.id,
      function(err, rows) {
        if (err) {
          res.err = new Error('Something died in the SQL.');
        }
        else {
          res.data = rows;
        }
        next();
      }
    );
  });
}, function(req, res, next) {
  db.serialize(function() {
    db.get('SELECT AVG(price) FROM Prefer ' +
           'INNER JOIN Client ON Prefer.username = Client.username ' +
           'INNER JOIN CoffeeProduct ON Prefer.productID = CoffeeProduct.id ' +
           'WHERE Prefer.username = ?',
      req.params.id,
      function(err, row) {
        res.avg = row['AVG(price)'];
        next();
      }
    );
  });
}, function(req, res, next) {
    var roasts = [];
    _.each(res.data, function(obj) {
      roasts.push('"' + obj.roastType + '"');
    });
    roasts = _.uniq(roasts);
    var roastsQry = roasts.join(',');
    console.log(roasts);

    db.serialize(function() {
      db.all('SELECT * FROM CoffeeProduct WHERE roastType IN (' + roastsQry + ') AND abs((price - ?)) < 3', res.avg, function(err, rows) {
        if (err) {
          console.log(err);
          res.err = err;
        }
        else {
          res.roasts = roasts;
          res.recommended = rows;
        }
        next();
      });
    });
}, function(req, res, next) {
    res.render('clients/view', {
      title: 'View Client',
      data: res.data,
      recommended: res.recommended,
      roasts: res.roasts,
      avg: res.avg
    });
});

router.post('/:id/delete', function(req, res, next) {
  db.serialize(function() {
    db.run('DELETE FROM Client WHERE username = ?', req.params.id, function(err) {
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
