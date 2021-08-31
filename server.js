const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

//perse Application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//Routes
const routes = require("./routers");
routes(app);

//Register menu routes from index
app.use("/auth", require("./middleware"));

//use port
const port = 3000;

//connection
app.listen(port, () => {
  console.log("Server started on Port: ", port);
});
