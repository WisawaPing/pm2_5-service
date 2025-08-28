"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hash = require("../config/hash");

var _hash2 = _interopRequireDefault(_hash);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

exports.default = function (req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).json({
      message: "Unauthorized"
    });
  } else {
    try {
      var token = req.headers.authorization.split(" ")[1];
      var decodedToken = _jsonwebtoken2.default.verify(token, _hash2.default.jwtSecret);
      var userId = decodedToken.id;
      var foundUser = User.findOne({ where: { id: userId } });

      //   console.log("token : ", token);

      if (!foundUser) {
        throw "Invalid token";
      } else {
        next();
      }
    } catch (err) {
      res.status(401).json({
        message: err
      });
    }
  }
};
//# sourceMappingURL=auth.js.map