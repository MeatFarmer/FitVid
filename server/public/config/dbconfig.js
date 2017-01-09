
var config = {
  database: ''
};
//
// If we are running on Heroku, use the remote database (with SSL)
if(process.env.DATABASE_URL != undefined) {
    config.database = process.env.DATABASE_URL + "?ssl=true";
} else {
    // running locally, use our local database instead
    config.database = 'sigma';
}




module.exports = config;
