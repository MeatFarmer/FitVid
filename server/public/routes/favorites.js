var router = require('express').Router();
var pg = require('pg');
var config = require('../config/dbconfig');

var email = "";

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
