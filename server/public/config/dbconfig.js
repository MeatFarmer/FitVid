var url = require('url');

var config = {};
//
// If we are running on Heroku, use the remote database (with SSL)

if(process.env.DATABASE_URL != undefined) {
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

} else {
  // running locally, use our local database instead
  config.database = 'sigma';
}


module.exports = config;
