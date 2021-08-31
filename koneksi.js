const mysql = require("mysql");

//create connection database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  databases: "db_restapi",
});

conn.connect((err) => {
  if (err) throw err;
  conssole.log("MySQL terkoneksi");
});

module.exports = conn;
