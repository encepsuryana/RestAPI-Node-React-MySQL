const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//perse Application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use port
const port = 3000;

//connection
app.listen(port, () => {
  console.log("Server started on Port: " + port);
});
