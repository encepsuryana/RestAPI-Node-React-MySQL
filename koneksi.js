const mysql = require("mysql");

//create connection database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_restapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("MySQL terkoneksi");
});

module.exports = conn;
