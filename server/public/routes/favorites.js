var router = require('express').Router();
var pg = require('pg');
var config = require('../config/dbconfig');

var email = "";
var deleteID = {};

var pool = new pg.Pool({
    database: config.database
});

router.post('/', function(req, res) {
    var newFav = req.body;
    // store in DB
    pool.connect()
        .then(function(client) {
            // make query
            client.query(
                    'INSERT INTO favorites (vidid, email) ' +
                    'VALUES ($1, $2)', [newFav.vidid, newFav.email])
                .then(function(result) {
                    client.release();
                    res.sendStatus(201);
                })
                .catch(function(err) {
                    // error
                    client.release();
                    console.log('error on INSERT', err);
                    res.sendStatus(500);
                });
        });
});

router.get('/:curEmail', function(req, res) {
    pool.connect()
        .then(function(client) {
            email = "'" + req.params.curEmail + "'";
            // make query
            client.query(
                    'SELECT * FROM favorites WHERE email = ' + email)
                .then(function(result) {
                    client.release();
                    res.send(result.rows);
                    console.log('select all from server', results.rows);
                })
                .catch(function(err) {
                    // error
                    client.release();
                    console.log('error on SELECT', err);
                    res.sendStatus(500);
                });
        });
});


router.delete('/', function(req, res) {
  deleteID = req.params.id;
  console.log('req.params', req.params);
  email = "'" + req.params.curEmail + "'";

  console.log('book id to delete: ', deleteID);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'DELETE FROM favorites WHERE id = $1 AND email = $2',
      [deleteID, email],
      function(err, result) {
        done();

        if(err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    });

});

module.exports = router;
