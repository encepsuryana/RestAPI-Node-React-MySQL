"use strict";

module.exports = function (app) {
  const json = require("./controller");

  //routes '/'
  app.route("/").get(json.index);

  app.route("/tampil").get(json.showAllDatas);

  app.route("/tampil/:id").get(json.showIdMahasiswa);
};
