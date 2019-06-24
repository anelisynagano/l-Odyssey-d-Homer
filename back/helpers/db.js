const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'anelisy',
  password : 'password',
  database : 'my_db'
});
module.exports  =  connection;