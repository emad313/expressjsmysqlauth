var mysql = require('mysql2');

var connection = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'mydb'
}).promise();

// connection.connect(function(err){
//     if(err) throw err;
//     console.log("Database Connected");
// });

module.exports = connection;