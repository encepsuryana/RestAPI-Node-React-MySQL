const jwt = require("jsonwebtoken");
const config = require("../config/secret");

function verification() {
  return function (req, rest, next) {
    var role = req.body.role;

    //check auth header
    var tokenWithBearer = req.headers.authorization;

    if (tokenWithBearer) {
      var token = tokenWithBearer.split(" ")[1];

      //verification
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return rest
            .status(401)
            .send({ auth: false, message: "Token not registered!" });
        } else {
          if (role == 2) {
            req.auth = decoded;
            next();
          } else {
            return rest
              .status(401)
              .send({ auth: false, message: "Cannot Auth your Role!" });
          }
        }
      });
    } else {
      return rest
        .status(401)
        .send({ auth: false, message: "Token not Available!" });
    }
  };
}

module.exports = verification;
