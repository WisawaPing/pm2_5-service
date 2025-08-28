"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

var _hash2 = require("../config/hash");

var _hash3 = _interopRequireDefault(_hash2);

var _findAllByQuery = require("../helpers/findAllByQuery");

var _findAllByQuery2 = _interopRequireDefault(_findAllByQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

var include = [];

var createToken = function createToken(payload, secretOrKey, expiresIn) {
  var token = _jsonwebtoken2.default.sign(payload, secretOrKey, {
    expiresIn: expiresIn
  });
  return token;
};

var findAll = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var users;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _findAllByQuery2.default)(req, User, include);

          case 3:
            users = _context.sent;

            res.send({
              response_status: "SUCCESS",
              data: users
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context.t0.message || "Some error occurred while retrieving the users."
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function findAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var create = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var user, username, foundUser, resUser;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            user = req.body;
            username = user.username;

            // Validate request

            if (username) {
              _context2.next = 6;
              break;
            }

            res.status(200).send({
              message: "Content can not be empty!"
            });
            return _context2.abrupt("return");

          case 6:
            _context2.next = 8;
            return User.findOne({ where: { username: username } });

          case 8:
            foundUser = _context2.sent;

            if (foundUser) {
              _context2.next = 16;
              break;
            }

            _context2.next = 12;
            return User.create(user);

          case 12:
            resUser = _context2.sent;

            res.send({
              response_status: "SUCCESS",
              data: resUser.dataValues
            });
            _context2.next = 17;
            break;

          case 16:
            res.status(200).send({
              response_status: "ERROR",
              error_msg: "Username นี้ มีผู้ใช้งานแล้ว"
            });

          case 17:
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);

            res.status(200).send({
              response_status: "ERROR",
              message: _context2.t0.message || "Some error occurred while creating the user."
            });

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 19]]);
  }));

  return function create(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var update = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var id, updateData, data, payload, _hash, result;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            updateData = req.body;
            _context3.next = 5;
            return User.findByPk(id);

          case 5:
            data = _context3.sent;

            if (data) {
              _context3.next = 9;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context3.abrupt("return");

          case 9:
            payload = (0, _extends3.default)({}, updateData);

            //   delete payload.password;

            // console.log("payload", payload);

            if (req.body.password) {
              _hash = _bcrypt2.default.hashSync(updateData.password, 10);

              payload = (0, _extends3.default)({}, updateData, {
                password: _hash
              });
            }

            _context3.next = 13;
            return User.update(payload, {
              where: { id: id }
            });

          case 13:
            result = _context3.sent;

            if (result == 1) {
              res.send({
                response_status: "SUCCESS",
                message: "Updated successfully"
              });
            } else {
              res.status(200).send({
                response_status: "ERROR",
                message: "(ID: " + id + ") was not found."
              });
            }
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t0.message || "Some error occurred while updating."
            });

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 17]]);
  }));

  return function update(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var login = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var user, username, password, foundUser, match, jwtSecret, id, _username, payload, token, response;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user = req.body;
            username = user.username, password = user.password;
            _context4.prev = 2;

            if (username) {
              _context4.next = 6;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context4.abrupt("return");

          case 6:
            _context4.next = 8;
            return User.findOne({ where: { username: username } });

          case 8:
            foundUser = _context4.sent;

            if (!(foundUser == null)) {
              _context4.next = 12;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "ไม่พบผู้ใช้งานนี้ในระบบ"
            });
            return _context4.abrupt("return");

          case 12:
            _context4.next = 14;
            return _bcrypt2.default.compareSync(password, foundUser.password);

          case 14:
            match = _context4.sent;

            if (match) {
              jwtSecret = _hash3.default.jwtSecret;
              id = foundUser.id, _username = foundUser.username;
              payload = { id: id, username: _username };
              token = createToken(payload, jwtSecret, "1d");
              response = (0, _extends3.default)({}, foundUser.dataValues, {
                token: token
              });


              res.send({
                response_status: "SUCCESS",
                data: response
              });
            } else {
              //   console.error("Password is incorrect");
              res.status(200).json({
                response_status: "ERROR",
                message: "Password is incorrect"
              });
            }
            _context4.next = 21;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](2);

            res.status(200).send({
              response_status: "ERROR",
              message: _context4.t0.message || "ไม่สามารถเชื่อมต่อกับ Server ได้"
            });

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[2, 18]]);
  }));

  return function login(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var id, foundUser;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return User.findOne({ include: include, where: { id: id } });

          case 4:
            foundUser = _context5.sent;


            if (foundUser) {
              res.send({
                response_status: "SUCCESS",
                data: foundUser.dataValues
              });
            } else {
              res.status(200).send({
                response_status: "ERROR",
                message: "ไม่พบรหัสผู้ใช้งานนี้ในระบบ"
              });
            }
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context5.t0.message || "ไม่สามารถเชื่อมต่อกับ Server ได้"
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 8]]);
  }));

  return function findOne(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var id, user;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return User.destroy({ where: { id: id } });

          case 4:
            user = _context6.sent;

            if (!(user == 1)) {
              _context6.next = 9;
              break;
            }

            res.send({
              response_status: "SUCCESS",
              message: "User was deleted successfully"
            });
            _context6.next = 11;
            break;

          case 9:
            res.status(200).send({
              response_status: "ERROR",
              message: "Log (ID: " + id + ") was not found."
            });
            return _context6.abrupt("return");

          case 11:
            _context6.next = 16;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context6.t0.message || "Some error occurred while deleting the user."
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 13]]);
  }));

  return function remove(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

// const sendOTP = async (req, res) => {
//   try {
//     const encodedParams = new URLSearchParams();

//     encodedParams.set("key", "1696097862238659");
//     encodedParams.set("secret", "7ddb91422ba40ce36195c7514c2667d8");
//     encodedParams.set("msisdn", "0626496993");

//     const url = "https://otp.thaibulksms.com/v1/otp/request";

//     const options = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: encodedParams,
//     };

//     fetch(url, options)
//       .then((res) => {
//         res.json();
//         console.log(res);
//       })
//       .then((json) => {
//         console.log(json);
//       })
//       .catch((err) => console.error("error:" + err));
//   } catch (err) {
//     res.send({
//       response_status: "ERROR",
//       message: err.message || "Some error occurred while updating the user.",
//     });
//   }
// };

exports.default = {
  create: create,
  findAll: findAll,
  update: update,
  login: login,
  findOne: findOne,
  remove: remove
  // sendOTP,
};
//# sourceMappingURL=user.controller.js.map