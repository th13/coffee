var sqlite = require('sqlite3').verbose();

var state = {
  db: null
};

var init = function(file, done) {
  if (state.db) { return done(); }

  // db setup
  var db = new sqlite.Database(file, function(err) {
    if (err) { return done(err); }
  });

  state.db = db;
  done();
};

var get = function() {
  if (!state.db) {
    init('db/data', function() {
      console.log('worked');
    });
  }

  return state.db;
};

exports.init = init;
exports.get = get;
