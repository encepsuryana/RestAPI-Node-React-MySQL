"use strict";

const response = require("./res");
const connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Rest API Running!", res);
};

//Show All Data table Mahasiswa
exports.showAllDatas = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
      console.log(rows);
    }
  });
};

//Show All Data Mahasiswa based ID
exports.showIdMahasiswa = function (req, res) {
  let id = req.params.id;

  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
        console.log(rows);
      }
    }
  );
};
