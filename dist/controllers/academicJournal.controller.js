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

var AcademicJournal = _models2.default.AcademicJournal,
    DocumentAcademicJournal = _models2.default.DocumentAcademicJournal;

var include = [];

var create = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, documentScholarship, ann;

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
            return AcademicJournal.create(req.body);

          case 6:
            data = _context.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;
            _iterator = (0, _getIterator3.default)(req.body.documentAcademicJournals);

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 20;
              break;
            }

            documentScholarship = _step.value;

            documentScholarship.academicJournalId = data.id;
            _context.next = 17;
            return DocumentAcademicJournal.create(documentScholarship);

          case 17:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 20:
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 26:
            _context.prev = 26;
            _context.prev = 27;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(26);

          case 34:
            _context.next = 36;
            return DocumentAcademicJournal.findAll({
              where: { academicJournalId: data.id }
            });

          case 36:
            ann = _context.sent;

            data.dataValues.documentAcademicJournals = [];
            data.dataValues.documentAcademicJournals = ann;

            if (data) {
              _context.next = 42;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while creating."
            });
            return _context.abrupt("return");

          case 42:
            res.status(201).send({
              response_status: "SUCCESS",
              data: data
            });
            _context.next = 48;
            break;

          case 45:
            _context.prev = 45;
            _context.t1 = _context["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context.t1.message || "Some error occurred while creating."
            });

          case 48:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 45], [10, 22, 26, 34], [27,, 29, 33]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateIndex = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var items, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, id, index, result;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            items = req.body;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 5;
            _iterator2 = (0, _getIterator3.default)(items);

          case 7:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context2.next = 20;
              break;
            }

            item = _step2.value;
            id = item.id, index = item.index;
            _context2.next = 12;
            return AcademicJournal.update({ index: index }, {
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
            _iteratorNormalCompletion2 = true;
            _context2.next = 7;
            break;

          case 20:
            _context2.next = 26;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](5);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 26:
            _context2.prev = 26;
            _context2.prev = 27;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 29:
            _context2.prev = 29;

            if (!_didIteratorError2) {
              _context2.next = 32;
              break;
            }

            throw _iteratorError2;

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
    var query, offset, limit, page, name_th, where, resultRes;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            query = req.query;
            offset = query.offset, limit = query.limit, page = query.page, name_th = query.name_th;

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


            if (query.name_th) {
              query.name_th = (0, _defineProperty3.default)({}, Op.like, "%" + name_th + "%");
            }

            if (query.searchGlobal) {
              where = {};
              where[Op.or] = [{
                name_th: (0, _defineProperty3.default)({}, Op.like, "%" + query.searchGlobal + "%")
              }, {
                name_en: (0, _defineProperty3.default)({}, Op.like, "%" + query.searchGlobal + "%")
              }];
            }
            // delete query.name_th_like

            _context3.next = 9;
            return AcademicJournal.findAll({
              limit: limit,
              offset: offset,
              where: where,
              include: include,
              order: [["index", "ASC"], ["createdAt", "DESC"]]
            });

          case 9:
            resultRes = _context3.sent;


            console.log("query ", query);
            // console.log("limit ", limit);
            // console.log("offset ", offset);

            if (resultRes) {
              _context3.next = 14;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context3.abrupt("return");

          case 14:
            res.status(200).send({
              response_status: "SUCCESS",
              data: resultRes
            });
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t0.message || "Some error occurred while finding."
            });

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 17]]);
  }));

  return function findAll(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var id, data, ann;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return AcademicJournal.findByPk(id, { include: include });

          case 4:
            data = _context4.sent;
            _context4.next = 7;
            return DocumentAcademicJournal.findAll({
              where: { academicJournalId: id }
            });

          case 7:
            ann = _context4.sent;

            data.dataValues.documentAcademicJournals = [];
            data.dataValues.documentAcademicJournals = ann;

            if (data) {
              _context4.next = 13;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context4.abrupt("return");

          case 13:

            res.send({
              response_status: "SUCCESS",
              data: data
            });
            _context4.next = 19;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context4.t0.message || "Some error occurred while finding."
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 16]]);
  }));

  return function findOne(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var update = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var id, result, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, documentAcademicJournal;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return AcademicJournal.update(req.body, {
              where: { id: id }
            });

          case 4:
            result = _context5.sent;


            console.log("result", result);

            if (!(result != 1)) {
              _context5.next = 9;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context5.abrupt("return");

          case 9:
            _context5.next = 11;
            return DocumentAcademicJournal.destroy({ where: { academicJournalId: id } });

          case 11:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context5.prev = 14;
            _iterator3 = (0, _getIterator3.default)(req.body.documentAcademicJournals);

          case 16:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context5.next = 24;
              break;
            }

            documentAcademicJournal = _step3.value;

            documentAcademicJournal.academicJournalId = id;
            _context5.next = 21;
            return DocumentAcademicJournal.create(documentAcademicJournal);

          case 21:
            _iteratorNormalCompletion3 = true;
            _context5.next = 16;
            break;

          case 24:
            _context5.next = 30;
            break;

          case 26:
            _context5.prev = 26;
            _context5.t0 = _context5["catch"](14);
            _didIteratorError3 = true;
            _iteratorError3 = _context5.t0;

          case 30:
            _context5.prev = 30;
            _context5.prev = 31;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 33:
            _context5.prev = 33;

            if (!_didIteratorError3) {
              _context5.next = 36;
              break;
            }

            throw _iteratorError3;

          case 36:
            return _context5.finish(33);

          case 37:
            return _context5.finish(30);

          case 38:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context5.next = 44;
            break;

          case 41:
            _context5.prev = 41;
            _context5.t1 = _context5["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context5.t1.message || "Some error occurred while updating."
            });

          case 44:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 41], [14, 26, 30, 38], [31,, 33, 37]]);
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
            return AcademicJournal.destroy({
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
//# sourceMappingURL=academicJournal.controller.js.map