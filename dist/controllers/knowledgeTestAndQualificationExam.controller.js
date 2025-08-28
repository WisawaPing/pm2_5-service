"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

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

var KnowledgeTestAndQualificationExam = _models2.default.KnowledgeTestAndQualificationExam,
    KnowledgeFile = _models2.default.KnowledgeFile;

var include = [];

var create = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, knowledgeFile;

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
            return KnowledgeTestAndQualificationExam.create(req.body);

          case 6:
            data = _context.sent;

            if (!req.body.filesAnnounces) {
              _context.next = 35;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 11;
            _iterator = (0, _getIterator3.default)(req.body.filesAnnounces);

          case 13:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 21;
              break;
            }

            knowledgeFile = _step.value;

            knowledgeFile.knowledgeTestAndQualificationExamId = data.dataValues.id;

            _context.next = 18;
            return KnowledgeFile.create(knowledgeFile);

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
            if (data) {
              _context.next = 38;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while creating."
            });
            return _context.abrupt("return");

          case 38:
            res.status(201).send({
              response_status: "SUCCESS",
              data: data
            });
            _context.next = 44;
            break;

          case 41:
            _context.prev = 41;
            _context.t1 = _context["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context.t1.message || "Some error occurred while creating."
            });

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 41], [11, 23, 27, 35], [28,, 30, 34]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var findAll = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var query, knowledgeTestAndQualificationExams, where, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, knowledgeTestAndQualificationExam;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            query = req.query;
            knowledgeTestAndQualificationExams = [];

            if (!((0, _keys2.default)(req.query).length > 0)) {
              _context2.next = 12;
              break;
            }

            where = {};

            (0, _keys2.default)(req.query).forEach(function (key) {
              if (key === "lang") {
                lang = req.query[key];
                return;
              }
              where[key] = req.query[key];
            });

            if (query.searchGlobal) {
              where = {};
              where[Op.or] = [{
                title_th: (0, _defineProperty3.default)({}, Op.like, "%" + query.searchGlobal + "%")
              }, {
                title_en: (0, _defineProperty3.default)({}, Op.like, "%" + query.searchGlobal + "%")
              }];
            }

            _context2.next = 9;
            return KnowledgeTestAndQualificationExam.findAll({
              // order: [
              //   [ 'createdAt', 'DESC' ],
              // ],
              where: where
            });

          case 9:
            knowledgeTestAndQualificationExams = _context2.sent;
            _context2.next = 15;
            break;

          case 12:
            _context2.next = 14;
            return KnowledgeTestAndQualificationExam.findAll({
              // order+: [
              //   [ 'createdAt', 'DESC' ],
              // ]
            });

          case 14:
            knowledgeTestAndQualificationExams = _context2.sent;

          case 15:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 18;
            _iterator2 = (0, _getIterator3.default)(knowledgeTestAndQualificationExams);

          case 20:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context2.next = 28;
              break;
            }

            knowledgeTestAndQualificationExam = _step2.value;
            _context2.next = 24;
            return KnowledgeFile.findAll({
              where: {
                knowledgeTestAndQualificationExamId: knowledgeTestAndQualificationExam.dataValues.id
              }
            });

          case 24:
            knowledgeTestAndQualificationExam.dataValues.filesAnnounces = _context2.sent;

          case 25:
            _iteratorNormalCompletion2 = true;
            _context2.next = 20;
            break;

          case 28:
            _context2.next = 34;
            break;

          case 30:
            _context2.prev = 30;
            _context2.t0 = _context2["catch"](18);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 34:
            _context2.prev = 34;
            _context2.prev = 35;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 37:
            _context2.prev = 37;

            if (!_didIteratorError2) {
              _context2.next = 40;
              break;
            }

            throw _iteratorError2;

          case 40:
            return _context2.finish(37);

          case 41:
            return _context2.finish(34);

          case 42:

            res.send({
              response_status: "SUCCESS",
              data: knowledgeTestAndQualificationExams
            });
            _context2.next = 48;
            break;

          case 45:
            _context2.prev = 45;
            _context2.t1 = _context2["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context2.t1.message || "Some error occurred while retrieving the knowledgeTestAndQualificationExams."
            });

          case 48:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 45], [18, 30, 34, 42], [35,, 37, 41]]);
  }));

  return function findAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var id, knowledgeTestAndQualificationExam;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return KnowledgeTestAndQualificationExam.findOne({
              where: { id: id }
            });

          case 4:
            knowledgeTestAndQualificationExam = _context3.sent;

            res.send({
              response_status: "SUCCESS",
              data: knowledgeTestAndQualificationExam.dataValues
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t0.message || "Some error occurred while retrieving the knowledgeTestAndQualificationExam."
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 8]]);
  }));

  return function findOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var update = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var id, result, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, knowledgeFile;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return KnowledgeTestAndQualificationExam.update(req.body, {
              where: { id: id }
            });

          case 4:
            result = _context4.sent;


            console.log("result", result);

            if (!req.body.filesAnnounces) {
              _context4.next = 36;
              break;
            }

            _context4.next = 9;
            return KnowledgeFile.destroy({
              where: {
                knowledgeTestAndQualificationExamId: id
              }
            });

          case 9:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context4.prev = 12;
            _iterator3 = (0, _getIterator3.default)(req.body.filesAnnounces);

          case 14:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context4.next = 22;
              break;
            }

            knowledgeFile = _step3.value;

            knowledgeFile.knowledgeTestAndQualificationExamId = id;

            _context4.next = 19;
            return KnowledgeFile.create(knowledgeFile);

          case 19:
            _iteratorNormalCompletion3 = true;
            _context4.next = 14;
            break;

          case 22:
            _context4.next = 28;
            break;

          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4["catch"](12);
            _didIteratorError3 = true;
            _iteratorError3 = _context4.t0;

          case 28:
            _context4.prev = 28;
            _context4.prev = 29;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 31:
            _context4.prev = 31;

            if (!_didIteratorError3) {
              _context4.next = 34;
              break;
            }

            throw _iteratorError3;

          case 34:
            return _context4.finish(31);

          case 35:
            return _context4.finish(28);

          case 36:
            if (!(result != 1)) {
              _context4.next = 39;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context4.abrupt("return");

          case 39:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context4.next = 45;
            break;

          case 42:
            _context4.prev = 42;
            _context4.t1 = _context4["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context4.t1.message || "Some error occurred while updating."
            });

          case 45:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 42], [12, 24, 28, 36], [29,, 31, 35]]);
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
            return KnowledgeTestAndQualificationExam.destroy({
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
//# sourceMappingURL=knowledgeTestAndQualificationExam.controller.js.map