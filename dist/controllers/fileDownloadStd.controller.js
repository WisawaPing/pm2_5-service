"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var include = [];

var FileDownloadStd = _models2.default.FileDownloadStd;


var create = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (req.body) {
              _context.next = 4;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return FileDownloadStd.create(req.body);

          case 6:
            data = _context.sent;

            if (data) {
              _context.next = 10;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while creating."
            });
            return _context.abrupt("return");

          case 10:
            res.status(201).send({
              response_status: "SUCCESS",
              data: data
            });
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context.t0.message || "Some error occurred while creating."
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 13]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var findAll = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var query, offset, limit, page, where, resultRes;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            query = req.query;
            offset = query.offset, limit = query.limit, page = query.page;

            if (offset || limit || page) {
              delete query.offset;
              delete query.limit;
              delete query.page;
              offset = offset ? Number(offset) : null;
              limit = limit ? Number(limit) : null;
              if (page) {
                offset = page ? Number(page) : null;
              }
            }
            where = query ? query : {};
            _context2.next = 7;
            return FileDownloadStd.findAll({
              limit: limit,
              offset: offset,
              where: where,
              include: include,
              order: [["createdAt", "DESC"], ["id", "DESC"]]
            });

          case 7:
            resultRes = _context2.sent;


            console.log("query ", query);
            // console.log("limit ", limit);
            // console.log("offset ", offset);

            if (resultRes) {
              _context2.next = 12;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context2.abrupt("return");

          case 12:
            res.status(200).send({
              response_status: "SUCCESS",
              data: resultRes
            });
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context2.t0.message || "Some error occurred while finding."
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 15]]);
  }));

  return function findAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var id, data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return FileDownloadStd.findByPk(id, { include: include });

          case 4:
            data = _context3.sent;

            if (data) {
              _context3.next = 8;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context3.abrupt("return");

          case 8:

            res.send({
              response_status: "SUCCESS",
              data: data
            });
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t0.message || "Some error occurred while finding."
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 11]]);
  }));

  return function findOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var update = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var id, result;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return FileDownloadStd.update(req.body, {
              where: { id: id }
            });

          case 4:
            result = _context4.sent;


            console.log("result", result);

            if (!(result != 1)) {
              _context4.next = 9;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context4.abrupt("return");

          case 9:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context4.t0.message || "Some error occurred while updating."
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 12]]);
  }));

  return function update(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var id, result;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return FileDownloadStd.destroy({
              where: { id: id }
            });

          case 4:
            result = _context5.sent;

            if (!(result !== 1)) {
              _context5.next = 8;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Log (ID: " + id + ") was not found."
            });
            return _context5.abrupt("return");

          case 8:

            res.send({
              response_status: "SUCCESS",
              message: "Deleted successfully"
            });
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context5.t0.message || "Some error occurred while deleting."
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 11]]);
  }));

  return function remove(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.default = {
  create: create,
  findAll: findAll,
  findOne: findOne,
  update: update,
  remove: remove
};
//# sourceMappingURL=fileDownloadStd.controller.js.map