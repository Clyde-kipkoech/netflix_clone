const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',      //  database host
  user: 'root',           //  MySQL username
  password: 'Clyde@123',   //  MySQL password
  database: 'movie-voting-system' //  database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

module.exports = connection;
