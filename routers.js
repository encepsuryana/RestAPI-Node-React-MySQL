"use strict";

module.exports = function (app) {
  const json = require("./controller");

  //routes '/'
  app.route("/").get(json.index);

  app.route("/tampil").get(json.showAllDatas);

  app.route("/tampil/:id").get(json.showIdMahasiswa);

  app.route("/tambah").post(json.addDatasMhs);

  app.route("/ubah").put(json.editDataMhs);

  app.route("/hapus").delete(json.deleteDataMhs);

  app.route("/tampilmatakuliah").get(json.showGroupMatakuliah);
};
