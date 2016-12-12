var router = require('express').Router();
var pg = require('pg');
var config = require('../config/dbconfig');

var pool = new pg.Pool({
  database: config.database
});

router.post('/', function(req, res) {
  console.log('adding vid');

  var newFav = req.body;
  console.log('newFav', newFav);
  // store in DB
  pool.connect()
    .then(function(client) {
      // make query
      client.query(
        'INSERT INTO favorites (vidid) ' +
        'VALUES ($1)',
        [newFav.vidid])
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

router.get('/', function(req, res) {
  pool.connect()
    .then(function(client) {
      // make query
      client.query(
        'SELECT * FROM favorites')
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

// router.put('/:id', function(req, res) {
//   pool.connect()
//     .then(function(client) {
//       // make query
//       client.query(
//         'UPDATE employees SET active = NOT active WHERE id = $1',
//       [req.params.id])
//         .then(function(result) {
//           client.release();
//           res.sendStatus(200);
//         })
//         .catch(function(err) {
//           // error
//           client.release();
//           console.log('error on UPDATE', err);
//           res.sendStatus(500);
//         });
//     });
// });

module.exports = router;
