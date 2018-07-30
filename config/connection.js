const mysql = require('mysql');

const connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'burgers_db'
  });
};

connection.connect(function (err) {
  if (err) {
    throw error;
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;