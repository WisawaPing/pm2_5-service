"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("sequelize"),
    Op = _require.Op;

var New = _models2.default.New,
    NewsFile = _models2.default.NewsFile,
    NewsDocumentFile = _models2.default.NewsDocumentFile;

var include = [];

var create = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, documentFile, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _documentFile;

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
            return New.create(req.body);

          case 6:
            data = _context.sent;

            if (!req.body.documentFilesNews) {
              _context.next = 35;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 11;
            _iterator = (0, _getIterator3.default)(req.body.documentFilesNews);

          case 13:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 21;
              break;
            }

            documentFile = _step.value;

            documentFile.newId = data.dataValues.id;

            _context.next = 18;
            return NewsDocumentFile.create(documentFile);

          case 18:
            _iteratorNormalCompletion = true;
            _context.next = 13;
            break;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](11);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 30:
            _context.prev = 30;

            if (!_didIteratorError) {
              _context.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(27);

          case 35:
            if (!req.body.pathPic) {
              _context.next = 63;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 39;
            _iterator2 = (0, _getIterator3.default)(req.body.pathPic);

          case 41:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 49;
              break;
            }

            _documentFile = _step2.value;

            _documentFile.newId = data.dataValues.id;

            _context.next = 46;
            return NewsFile.create(_documentFile);

          case 46:
            _iteratorNormalCompletion2 = true;
            _context.next = 41;
            break;

          case 49:
            _context.next = 55;
            break;

          case 51:
            _context.prev = 51;
            _context.t1 = _context["catch"](39);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 55:
            _context.prev = 55;
            _context.prev = 56;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 58:
            _context.prev = 58;

            if (!_didIteratorError2) {
              _context.next = 61;
              break;
            }

            throw _iteratorError2;

          case 61:
            return _context.finish(58);

          case 62:
            return _context.finish(55);

          case 63:
            if (data) {
              _context.next = 66;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while creating."
            });
            return _context.abrupt("return");

          case 66:
            res.status(201).send({
              response_status: "SUCCESS",
              data: data
            });
            _context.next = 72;
            break;

          case 69:
            _context.prev = 69;
            _context.t2 = _context["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context.t2.message || "Some error occurred while creating."
            });

          case 72:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 69], [11, 23, 27, 35], [28,, 30, 34], [39, 51, 55, 63], [56,, 58, 62]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateIndex = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var items, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item, id, index, result;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            items = req.body;
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context2.prev = 5;
            _iterator3 = (0, _getIterator3.default)(items);

          case 7:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context2.next = 20;
              break;
            }

            item = _step3.value;
            id = item.id, index = item.index;
            _context2.next = 12;
            return New.update({ index: index }, {
              where: { id: id }
            });

          case 12:
            result = _context2.sent;


            console.log("result", result);

            if (!(result[0] !== 1)) {
              _context2.next = 17;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context2.abrupt("return");

          case 17:
            _iteratorNormalCompletion3 = true;
            _context2.next = 7;
            break;

          case 20:
            _context2.next = 26;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](5);
            _didIteratorError3 = true;
            _iteratorError3 = _context2.t0;

          case 26:
            _context2.prev = 26;
            _context2.prev = 27;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 29:
            _context2.prev = 29;

            if (!_didIteratorError3) {
              _context2.next = 32;
              break;
            }

            throw _iteratorError3;

          case 32:
            return _context2.finish(29);

          case 33:
            return _context2.finish(26);

          case 34:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context2.next = 40;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t1 = _context2["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context2.t1.message || "Some error occurred while updating."
            });

          case 40:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 37], [5, 22, 26, 34], [27,, 29, 33]]);
  }));

  return function updateIndex(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var findAll = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var query, offset, limit, page, where, resultRes;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
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


            if (query.searchGlobal) {
              where = {};
              where[Op.or] = [{
                title_th: (0, _defineProperty3.default)({}, Op.like, "%" + query.searchGlobal + "%")
              }, {
                title_en: (0, _defineProperty3.default)({}, Op.like, "%" + query.searchGlobal + "%")
              }];
            }

            _context3.next = 8;
            return New.findAll({
              limit: limit,
              offset: offset,
              where: where,
              include: include,
              order: [["index", "ASC"], ["createdAt", "DESC"]]
            });

          case 8:
            resultRes = _context3.sent;

            if (resultRes) {
              _context3.next = 12;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context3.abrupt("return");

          case 12:
            res.status(200).send({
              response_status: "SUCCESS",
              data: resultRes
            });
            _context3.next = 18;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t0.message || "Some error occurred while finding."
            });

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 15]]);
  }));

  return function findAll(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var id, data;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return New.findByPk(id, { include: include });

          case 4:
            data = _context4.sent;
            _context4.next = 7;
            return NewsDocumentFile.findAll({
              where: {
                newId: data.dataValues.id
              }
            });

          case 7:
            data.dataValues.documentFilesNews = _context4.sent;
            _context4.next = 10;
            return NewsFile.findAll({
              where: {
                newId: data.dataValues.id
              }
            });

          case 10:
            data.dataValues.pathPic = _context4.sent;

            if (data) {
              _context4.next = 14;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context4.abrupt("return");

          case 14:

            res.send({
              response_status: "SUCCESS",
              data: data
            });
            _context4.next = 20;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context4.t0.message || "Some error occurred while finding."
            });

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 17]]);
  }));

  return function findOne(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var update = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var id, result, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, documentFile, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _documentFile2;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return New.update(req.body, {
              where: { id: id }
            });

          case 4:
            result = _context5.sent;


            console.log("result", result);

            if (!req.body.documentFilesNews) {
              _context5.next = 36;
              break;
            }

            _context5.next = 9;
            return NewsDocumentFile.destroy({
              where: {
                newId: id
              }
            });

          case 9:
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context5.prev = 12;
            _iterator4 = (0, _getIterator3.default)(req.body.documentFilesNews);

          case 14:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
              _context5.next = 22;
              break;
            }

            documentFile = _step4.value;

            documentFile.newId = id;

            _context5.next = 19;
            return NewsDocumentFile.create(documentFile);

          case 19:
            _iteratorNormalCompletion4 = true;
            _context5.next = 14;
            break;

          case 22:
            _context5.next = 28;
            break;

          case 24:
            _context5.prev = 24;
            _context5.t0 = _context5["catch"](12);
            _didIteratorError4 = true;
            _iteratorError4 = _context5.t0;

          case 28:
            _context5.prev = 28;
            _context5.prev = 29;

            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }

          case 31:
            _context5.prev = 31;

            if (!_didIteratorError4) {
              _context5.next = 34;
              break;
            }

            throw _iteratorError4;

          case 34:
            return _context5.finish(31);

          case 35:
            return _context5.finish(28);

          case 36:
            if (!req.body.pathPic) {
              _context5.next = 66;
              break;
            }

            _context5.next = 39;
            return NewsFile.destroy({
              where: {
                newId: id
              }
            });

          case 39:
            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context5.prev = 42;
            _iterator5 = (0, _getIterator3.default)(req.body.pathPic);

          case 44:
            if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
              _context5.next = 52;
              break;
            }

            _documentFile2 = _step5.value;

            _documentFile2.newId = id;

            _context5.next = 49;
            return NewsFile.create(_documentFile2);

          case 49:
            _iteratorNormalCompletion5 = true;
            _context5.next = 44;
            break;

          case 52:
            _context5.next = 58;
            break;

          case 54:
            _context5.prev = 54;
            _context5.t1 = _context5["catch"](42);
            _didIteratorError5 = true;
            _iteratorError5 = _context5.t1;

          case 58:
            _context5.prev = 58;
            _context5.prev = 59;

            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }

          case 61:
            _context5.prev = 61;

            if (!_didIteratorError5) {
              _context5.next = 64;
              break;
            }

            throw _iteratorError5;

          case 64:
            return _context5.finish(61);

          case 65:
            return _context5.finish(58);

          case 66:
            if (!(result != 1)) {
              _context5.next = 69;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context5.abrupt("return");

          case 69:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context5.next = 75;
            break;

          case 72:
            _context5.prev = 72;
            _context5.t2 = _context5["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context5.t2.message || "Some error occurred while updating."
            });

          case 75:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 72], [12, 24, 28, 36], [29,, 31, 35], [42, 54, 58, 66], [59,, 61, 65]]);
  }));

  return function update(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var id, result;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return New.destroy({
              where: { id: id }
            });

          case 4:
            result = _context6.sent;

            if (!(result !== 1)) {
              _context6.next = 8;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Log (ID: " + id + ") was not found."
            });
            return _context6.abrupt("return");

          case 8:

            res.send({
              response_status: "SUCCESS",
              message: "Deleted successfully"
            });
            _context6.next = 14;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context6.t0.message || "Some error occurred while deleting."
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 11]]);
  }));

  return function remove(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.default = {
  create: create,
  findAll: findAll,
  updateIndex: updateIndex,
  findOne: findOne,
  update: update,
  remove: remove
};
//# sourceMappingURL=new.controller.js.map