var router = require('express').Router();
var pg = require('pg');
var config = require('../config/dbconfig');


var email = "";
var vid = "";
var newFav = {};


var pool = new pg.Pool(config);

router.post('/', function(req, res) {
    console.log('params : ', req.params);
    newFav = req.body;
    console.log;
    console.log('newfav.vidid: ', newFav.vidid);
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
        })

});

router.get('/:curEmail', function(req, res) {
    pool.connect()
        .then(function(client) {
          console.log('HERE');
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
        })
        .catch(function(err) {
          console.log('catch ERROR!! ' , err);
          res.sendStatus(510);
        });

});


router.delete('/:vid/:curEmail', function(req, res) {
  vid = req.params.vid;
  console.log('req.body :', req.body);
  console.log('req.params.vid', req.params.vid);
  email = req.params.curEmail;

  console.log('book id to delete: ', vid);
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'DELETE FROM favorites WHERE vidid = $1 AND email = $2',
      [vid, email],
      function(err, result) {
        done();

        if(err) {
          res.sendStatus(500);
          console.log(err);
        } else {
          res.sendStatus(200);
        }
      });
    });

});

module.exports = router;
