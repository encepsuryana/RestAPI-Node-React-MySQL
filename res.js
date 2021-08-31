"use strict";

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.end();
};

//response for nsted matakuliah
exports.oknested = function (values, res) {
  //acumulation
  const hasil = values.reduce((acumulation, item) => {
    //key group
    if (acumulation[item.nama]) {
      //make valiable group nama mhs
      const group = acumulation[item.nama];
      //check aray matakuliah
      if (Array.isArray(group.matakuliah)) {
        //add value to group
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      acumulation[item.nama] = item;
    }
    return acumulation;
  }, {});

  var data = {
    status: 200,
    values: hasil,
  };

  res.json(data);
  res.end();
};
