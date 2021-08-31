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

// Add data mahasiswa
exports.addDatasMhs = function (req, res) {
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    `INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)`,
    [nim, nama, jurusan],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Success add Data!", res);
        console.log(rows, [nim, nama, jurusan]);
      }
    }
  );
};

// Edit data Mahasiswa
exports.editDataMhs = function (req, res) {
  var id = req.body.id_mahasiswa;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query(
    `UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa`,
    [nim, nama, jurusan, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Success Edit Data ID " + id + "!", res);
        console.log(rows, [nim, nama, jurusan, id]);
      }
    }
  );
};

// Delete data Mahasiswa based ID
exports.deleteDataMhs = function (req, res) {
  var id = req.body.id_mahasiswa;

  connection.query(
    `DELETE FROM mahasiswa WHERE id_mahasiswa=?`,
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Success Delete Data ID : " + id + "!", res);
        console.log(rows, [id]);
      }
    }
  );
};
