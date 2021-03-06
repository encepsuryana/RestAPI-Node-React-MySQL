const connection = require("../koneksi");
const mysql = require("mysql");
const md5 = require("md5");
const response = require("../res");
const jwt = require("jsonwebtoken");
const config = require("../config/secret");
const ip = require("ip");

//contoller Register
exports.registration = function (req, res) {
  var post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    tanggal_daftar: new Date(),
  };

  var query = `SELECT email from ?? WHERE ?? = ?`;
  var table = ["user", "email", post.email];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        var query = `INSERT INTO ?? SET ?`;
        var table = ["user"];
        query = mysql.format(query, table);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("Success add new user Data", res);
          }
        });
      } else {
        response.ok("Email already register!", res);
      }
    }
  });
};

//Controller Login
exports.login = function (req, res) {
  var post = {
    password: req.body.password,
    email: req.body.email,
  };

  var query = `SELECT * FROM ?? WHERE ??=? AND ??=?`;
  var table = ["user", "password", md5(post.password), "email", post.email];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 1) {
        var token = jwt.sign({ rows }, config.secret, {
          expiresIn: 1440, //25 Minuts
        });
        id_user = rows[0].id;

        var data = {
          id_user: id_user,
          access_token: token,
          ip_address: ip.address(),
        };

        var query = `INSERT INTO ?? SET ?`;
        var table = ["akses_token"];

        query = mysql.format(query, table);
        connection.query(query, data, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            res.json({
              success: true,
              message: "Token JWT has Generate!",
              token: token,
              currUser: data.id_user,
            });
          }
        });
      } else {
        res.json({ error: true, message: "Email or Password Invalid!" });
      }
    }
  });
};

exports.pageSecret = function (req, res) {
  response.ok("This page only authorize for user has Role 2!", res);
};
