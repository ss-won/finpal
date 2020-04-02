/**
 * Connect mysql DB
 */
var config = require('./config.js');
var db_mysql = require('mysql').createConnection(config.mysql);

db_mysql.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
  });

module.exports = db_mysql;

