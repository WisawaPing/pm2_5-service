"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MajorNew = _models2.default.MajorNew,
    SubjectMajorNew = _models2.default.SubjectMajorNew;

var include = [];

var create = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var data, subject;
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
            return MajorNew.create(req.body);

          case 6:
            data = _context.sent;
            _context.t0 = _regenerator2.default.keys(req.body.subject);

          case 8:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 16;
              break;
            }

            subject = _context.t1.value;

            subject.majorNewId = data.dataValues.id;
            subject.coursesOfferedId = subject.subjectId;
            _context.next = 14;
            return SubjectMajorNew.create(subject);

          case 14:
            _context.next = 8;
            break;

          case 16:
            if (data) {
              _context.next = 19;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while creating."
            });
            return _context.abrupt("return");

          case 19:
            res.status(201).send({
              response_status: "SUCCESS",
              data: data
            });
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t2 = _context["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context.t2.message || "Some error occurred while creating."
            });

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 22]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var findAll = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var majorNews, where, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, majorNew, subjectMajorNew;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            majorNews = [];

            if (!((0, _keys2.default)(req.query).length > 0)) {
              _context2.next = 10;
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
            _context2.next = 7;
            return MajorNew.findAll({
              // order: [
              //   [ 'createdAt', 'DESC' ],
              // ],
              where: where,
              include: ['course']
            });

          case 7:
            majorNews = _context2.sent;
            _context2.next = 13;
            break;

          case 10:
            _context2.next = 12;
            return MajorNew.findAll({
              // order+: [
              //   [ 'createdAt', 'DESC' ],
              // ]
              include: ['course']
            });

          case 12:
            majorNews = _context2.sent;

          case 13:

            //SubjectMajorNew
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 16;
            _iterator = (0, _getIterator3.default)(majorNews);

          case 18:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 27;
              break;
            }

            majorNew = _step.value;
            _context2.next = 22;
            return SubjectMajorNew.findAll({ where: { majorNewId: majorNew.id }, include: ['courses_offered'] });

          case 22:
            subjectMajorNew = _context2.sent;

            majorNew.dataValues.subject = subjectMajorNew;

          case 24:
            _iteratorNormalCompletion = true;
            _context2.next = 18;
            break;

          case 27:
            _context2.next = 33;
            break;

          case 29:
            _context2.prev = 29;
            _context2.t0 = _context2["catch"](16);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 33:
            _context2.prev = 33;
            _context2.prev = 34;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 36:
            _context2.prev = 36;

            if (!_didIteratorError) {
              _context2.next = 39;
              break;
            }

            throw _iteratorError;

          case 39:
            return _context2.finish(36);

          case 40:
            return _context2.finish(33);

          case 41:

            res.send({
              response_status: "SUCCESS",
              data: majorNews
            });
            _context2.next = 47;
            break;

          case 44:
            _context2.prev = 44;
            _context2.t1 = _context2["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context2.t1.message || "Some error occurred while retrieving the majorNews."
            });

          case 47:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 44], [16, 29, 33, 41], [34,, 36, 40]]);
  }));

  return function findAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var id, majorNew, subjectMajorNew, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, subjectMajor;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return MajorNew.findOne({
              where: { id: id },
              include: ['course']
            });

          case 4:
            majorNew = _context3.sent;
            _context3.next = 7;
            return SubjectMajorNew.findAll({ where: { majorNewId: id } });

          case 7:
            subjectMajorNew = _context3.sent;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context3.prev = 11;

            for (_iterator2 = (0, _getIterator3.default)(subjectMajorNew); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              subjectMajor = _step2.value;

              subjectMajor.dataValues.subjectId = subjectMajor.dataValues.coursesOfferedId;
            }
            _context3.next = 19;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](11);
            _didIteratorError2 = true;
            _iteratorError2 = _context3.t0;

          case 19:
            _context3.prev = 19;
            _context3.prev = 20;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 22:
            _context3.prev = 22;

            if (!_didIteratorError2) {
              _context3.next = 25;
              break;
            }

            throw _iteratorError2;

          case 25:
            return _context3.finish(22);

          case 26:
            return _context3.finish(19);

          case 27:
            majorNew.dataValues.subject = subjectMajorNew;
            res.send({
              response_status: "SUCCESS",
              data: majorNew.dataValues
            });
            _context3.next = 34;
            break;

          case 31:
            _context3.prev = 31;
            _context3.t1 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t1.message || "Some error occurred while retrieving the majorNew."
            });

          case 34:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 31], [11, 15, 19, 27], [20,, 22, 26]]);
  }));

  return function findOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var update = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var id, result, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, subject;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return MajorNew.update(req.body, {
              where: { id: id }
            });

          case 4:
            result = _context4.sent;


            console.log("result", result);

            _context4.next = 8;
            return SubjectMajorNew.destroy({ where: { majorNewId: id } });

          case 8:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context4.prev = 11;
            _iterator3 = (0, _getIterator3.default)(req.body.subject);

          case 13:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context4.next = 22;
              break;
            }

            subject = _step3.value;

            subject.majorNewId = id;
            subject.coursesOfferedId = subject.subjectId;
            _context4.next = 19;
            return SubjectMajorNew.create(subject);

          case 19:
            _iteratorNormalCompletion3 = true;
            _context4.next = 13;
            break;

          case 22:
            _context4.next = 28;
            break;

          case 24:
            _context4.prev = 24;
            _context4.t0 = _context4["catch"](11);
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
    }, _callee4, undefined, [[0, 42], [11, 24, 28, 36], [29,, 31, 35]]);
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
            return MajorNew.destroy({ where: { id: id } });

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
//# sourceMappingURL=majorNew.controller.js.map