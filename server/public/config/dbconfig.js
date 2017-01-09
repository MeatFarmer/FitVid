var url = require('url');

var config = {};
//
// If we are running on Heroku, use the remote database (with SSL)

if(process.env.DATABASE_URL != undefined) {
  // postgres://txgxscxzmadzjd:1d43f55f7b6fe8672d3510d5c0ee302497c64c7b9677c3924923780eb1abb7f8@ec2-23-21-219-105.compute-1.amazonaws.com:5432/dbl3itb0p4mmtd
  var params = url.parse(process.env.DATABASE_URL);
  var auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

  console.log('DB CONFIG: ', config);

} else {
  // running locally, use our local database instead
  config.database = 'sigma';
}


module.exports = config;
