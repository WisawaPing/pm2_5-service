"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Major = _models2.default.Major,
    TypeCourse = _models2.default.TypeCourse,
    SubjectMajor = _models2.default.SubjectMajor,
    SubjectTypeCourse = _models2.default.SubjectTypeCourse,
    Course = _models2.default.Course;

var include = ["level", "facualty"];

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
            return Major.create(req.body);

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
            return Major.findAll({
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
            return Major.findByPk(id, { include: include });

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
            return Major.update(req.body, {
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
            return Major.destroy({
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

var form3 = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var _req$body, majors, typeCourse, courseId, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterator, subject, majorData, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, iteratorSubject, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _iterator4, typeCourseData, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator5, _step4, _iteratorSubject;

    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;

            if (req.body) {
              _context6.next = 4;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context6.abrupt("return");

          case 4:
            _req$body = req.body, majors = _req$body.majors, typeCourse = _req$body.typeCourse, courseId = _req$body.courseId;

            // majors for

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context6.prev = 8;
            _iterator = (0, _getIterator3.default)(majors);

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context6.next = 45;
              break;
            }

            iterator = _step.value;
            subject = iterator.subject;
            _context6.next = 15;
            return Major.create((0, _extends3.default)({}, iterator, {
              courseId: courseId
            }));

          case 15:
            majorData = _context6.sent;
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context6.prev = 19;
            _iterator3 = (0, _getIterator3.default)(subject);

          case 21:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context6.next = 28;
              break;
            }

            iteratorSubject = _step3.value;
            _context6.next = 25;
            return SubjectMajor.create((0, _extends3.default)({}, iteratorSubject, {
              majorId: majorData.dataValues.id
            }));

          case 25:
            _iteratorNormalCompletion3 = true;
            _context6.next = 21;
            break;

          case 28:
            _context6.next = 34;
            break;

          case 30:
            _context6.prev = 30;
            _context6.t0 = _context6["catch"](19);
            _didIteratorError3 = true;
            _iteratorError3 = _context6.t0;

          case 34:
            _context6.prev = 34;
            _context6.prev = 35;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 37:
            _context6.prev = 37;

            if (!_didIteratorError3) {
              _context6.next = 40;
              break;
            }

            throw _iteratorError3;

          case 40:
            return _context6.finish(37);

          case 41:
            return _context6.finish(34);

          case 42:
            _iteratorNormalCompletion = true;
            _context6.next = 10;
            break;

          case 45:
            _context6.next = 51;
            break;

          case 47:
            _context6.prev = 47;
            _context6.t1 = _context6["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context6.t1;

          case 51:
            _context6.prev = 51;
            _context6.prev = 52;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 54:
            _context6.prev = 54;

            if (!_didIteratorError) {
              _context6.next = 57;
              break;
            }

            throw _iteratorError;

          case 57:
            return _context6.finish(54);

          case 58:
            return _context6.finish(51);

          case 59:

            // typeCourse for loop
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context6.prev = 62;
            _iterator2 = (0, _getIterator3.default)(typeCourse);

          case 64:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context6.next = 99;
              break;
            }

            _iterator4 = _step2.value;
            subject = _iterator4.subject;
            _context6.next = 69;
            return TypeCourse.create((0, _extends3.default)({}, _iterator4, {
              courseId: courseId
            }));

          case 69:
            typeCourseData = _context6.sent;
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context6.prev = 73;
            _iterator5 = (0, _getIterator3.default)(subject);

          case 75:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator5.next()).done) {
              _context6.next = 82;
              break;
            }

            _iteratorSubject = _step4.value;
            _context6.next = 79;
            return SubjectTypeCourse.create((0, _extends3.default)({}, _iteratorSubject, {
              typeCourseId: typeCourseData.dataValues.id
            }));

          case 79:
            _iteratorNormalCompletion4 = true;
            _context6.next = 75;
            break;

          case 82:
            _context6.next = 88;
            break;

          case 84:
            _context6.prev = 84;
            _context6.t2 = _context6["catch"](73);
            _didIteratorError4 = true;
            _iteratorError4 = _context6.t2;

          case 88:
            _context6.prev = 88;
            _context6.prev = 89;

            if (!_iteratorNormalCompletion4 && _iterator5.return) {
              _iterator5.return();
            }

          case 91:
            _context6.prev = 91;

            if (!_didIteratorError4) {
              _context6.next = 94;
              break;
            }

            throw _iteratorError4;

          case 94:
            return _context6.finish(91);

          case 95:
            return _context6.finish(88);

          case 96:
            _iteratorNormalCompletion2 = true;
            _context6.next = 64;
            break;

          case 99:
            _context6.next = 105;
            break;

          case 101:
            _context6.prev = 101;
            _context6.t3 = _context6["catch"](62);
            _didIteratorError2 = true;
            _iteratorError2 = _context6.t3;

          case 105:
            _context6.prev = 105;
            _context6.prev = 106;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 108:
            _context6.prev = 108;

            if (!_didIteratorError2) {
              _context6.next = 111;
              break;
            }

            throw _iteratorError2;

          case 111:
            return _context6.finish(108);

          case 112:
            return _context6.finish(105);

          case 113:

            // const data = await Major.create(req.body);
            // if (!data) {
            //   res.send({
            //     response_status: "ERROR",
            //     message: err.message || "Some error occurred while creating.",
            //   });
            //   return;
            // }
            res.status(201).send({
              response_status: "SUCCESS"
              // data,
              // resultMajor: resultMajor[0].id,
            });
            _context6.next = 119;
            break;

          case 116:
            _context6.prev = 116;
            _context6.t4 = _context6["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context6.t4.message || "Some error occurred while creating."
            });

          case 119:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 116], [8, 47, 51, 59], [19, 30, 34, 42], [35,, 37, 41], [52,, 54, 58], [62, 101, 105, 113], [73, 84, 88, 96], [89,, 91, 95], [106,, 108, 112]]);
  }));

  return function form3(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var getCourseIdForm3 = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var courseId, courseRes, majorRes, typeCourseRes, payload;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            courseId = req.params.courseId;
            _context7.next = 4;
            return Course.findByPk(courseId);

          case 4:
            courseRes = _context7.sent;
            _context7.next = 7;
            return Major.findAll({
              include: SubjectMajor,
              where: { courseId: courseId }
            });

          case 7:
            majorRes = _context7.sent;
            _context7.next = 10;
            return TypeCourse.findAll({
              where: { courseId: courseId },
              include: SubjectTypeCourse
            });

          case 10:
            typeCourseRes = _context7.sent;

            if (courseRes) {
              _context7.next = 14;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context7.abrupt("return");

          case 14:
            payload = {
              courseId: courseId,
              course: (0, _extends3.default)({}, courseRes.dataValues),
              majors: majorRes,
              typeCourse: typeCourseRes
            };


            res.send({
              response_status: "SUCCESS",
              data: payload
            });
            _context7.next = 21;
            break;

          case 18:
            _context7.prev = 18;
            _context7.t0 = _context7["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context7.t0.message || "Some error occurred while finding."
            });

          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[0, 18]]);
  }));

  return function getCourseIdForm3(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var updateCourseIdForm3 = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
    var courseId, _req$body2, majors, typeCourse, courseRes, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator6, _step5, iterator, subject, id, majorData, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator8, _step7, iteratorSubject, _id, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator7, _step6, _iterator9, typeCourseData, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator10, _step8, _iteratorSubject2, _id2;

    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            courseId = req.params.courseId;

            if (req.body) {
              _context8.next = 5;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context8.abrupt("return");

          case 5:
            _req$body2 = req.body, majors = _req$body2.majors, typeCourse = _req$body2.typeCourse;
            _context8.next = 8;
            return Course.findByPk(courseId);

          case 8:
            courseRes = _context8.sent;

            if (courseRes) {
              _context8.next = 12;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(courseId: " + courseId + ") was not found."
            });
            return _context8.abrupt("return");

          case 12:

            // majors for
            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context8.prev = 15;
            _iterator6 = (0, _getIterator3.default)(majors);

          case 17:
            if (_iteratorNormalCompletion5 = (_step5 = _iterator6.next()).done) {
              _context8.next = 53;
              break;
            }

            iterator = _step5.value;
            subject = iterator.subject, id = iterator.id;
            _context8.next = 22;
            return Major.update((0, _extends3.default)({}, iterator), {
              where: { id: id }
            });

          case 22:
            majorData = _context8.sent;
            _iteratorNormalCompletion7 = true;
            _didIteratorError7 = false;
            _iteratorError7 = undefined;
            _context8.prev = 26;
            _iterator8 = (0, _getIterator3.default)(subject);

          case 28:
            if (_iteratorNormalCompletion7 = (_step7 = _iterator8.next()).done) {
              _context8.next = 36;
              break;
            }

            iteratorSubject = _step7.value;
            _id = iteratorSubject.id;
            _context8.next = 33;
            return SubjectMajor.update((0, _extends3.default)({}, iteratorSubject), {
              where: { id: _id }
            });

          case 33:
            _iteratorNormalCompletion7 = true;
            _context8.next = 28;
            break;

          case 36:
            _context8.next = 42;
            break;

          case 38:
            _context8.prev = 38;
            _context8.t0 = _context8["catch"](26);
            _didIteratorError7 = true;
            _iteratorError7 = _context8.t0;

          case 42:
            _context8.prev = 42;
            _context8.prev = 43;

            if (!_iteratorNormalCompletion7 && _iterator8.return) {
              _iterator8.return();
            }

          case 45:
            _context8.prev = 45;

            if (!_didIteratorError7) {
              _context8.next = 48;
              break;
            }

            throw _iteratorError7;

          case 48:
            return _context8.finish(45);

          case 49:
            return _context8.finish(42);

          case 50:
            _iteratorNormalCompletion5 = true;
            _context8.next = 17;
            break;

          case 53:
            _context8.next = 59;
            break;

          case 55:
            _context8.prev = 55;
            _context8.t1 = _context8["catch"](15);
            _didIteratorError5 = true;
            _iteratorError5 = _context8.t1;

          case 59:
            _context8.prev = 59;
            _context8.prev = 60;

            if (!_iteratorNormalCompletion5 && _iterator6.return) {
              _iterator6.return();
            }

          case 62:
            _context8.prev = 62;

            if (!_didIteratorError5) {
              _context8.next = 65;
              break;
            }

            throw _iteratorError5;

          case 65:
            return _context8.finish(62);

          case 66:
            return _context8.finish(59);

          case 67:

            // // typeCourse for loop
            _iteratorNormalCompletion6 = true;
            _didIteratorError6 = false;
            _iteratorError6 = undefined;
            _context8.prev = 70;
            _iterator7 = (0, _getIterator3.default)(typeCourse);

          case 72:
            if (_iteratorNormalCompletion6 = (_step6 = _iterator7.next()).done) {
              _context8.next = 108;
              break;
            }

            _iterator9 = _step6.value;
            subject = _iterator9.subject, id = _iterator9.id;
            _context8.next = 77;
            return TypeCourse.update((0, _extends3.default)({}, _iterator9), {
              where: { id: id }
            });

          case 77:
            typeCourseData = _context8.sent;
            _iteratorNormalCompletion8 = true;
            _didIteratorError8 = false;
            _iteratorError8 = undefined;
            _context8.prev = 81;
            _iterator10 = (0, _getIterator3.default)(subject);

          case 83:
            if (_iteratorNormalCompletion8 = (_step8 = _iterator10.next()).done) {
              _context8.next = 91;
              break;
            }

            _iteratorSubject2 = _step8.value;
            _id2 = _iteratorSubject2.id;
            _context8.next = 88;
            return SubjectTypeCourse.update((0, _extends3.default)({}, _iteratorSubject2), {
              where: { id: _id2 }
            });

          case 88:
            _iteratorNormalCompletion8 = true;
            _context8.next = 83;
            break;

          case 91:
            _context8.next = 97;
            break;

          case 93:
            _context8.prev = 93;
            _context8.t2 = _context8["catch"](81);
            _didIteratorError8 = true;
            _iteratorError8 = _context8.t2;

          case 97:
            _context8.prev = 97;
            _context8.prev = 98;

            if (!_iteratorNormalCompletion8 && _iterator10.return) {
              _iterator10.return();
            }

          case 100:
            _context8.prev = 100;

            if (!_didIteratorError8) {
              _context8.next = 103;
              break;
            }

            throw _iteratorError8;

          case 103:
            return _context8.finish(100);

          case 104:
            return _context8.finish(97);

          case 105:
            _iteratorNormalCompletion6 = true;
            _context8.next = 72;
            break;

          case 108:
            _context8.next = 114;
            break;

          case 110:
            _context8.prev = 110;
            _context8.t3 = _context8["catch"](70);
            _didIteratorError6 = true;
            _iteratorError6 = _context8.t3;

          case 114:
            _context8.prev = 114;
            _context8.prev = 115;

            if (!_iteratorNormalCompletion6 && _iterator7.return) {
              _iterator7.return();
            }

          case 117:
            _context8.prev = 117;

            if (!_didIteratorError6) {
              _context8.next = 120;
              break;
            }

            throw _iteratorError6;

          case 120:
            return _context8.finish(117);

          case 121:
            return _context8.finish(114);

          case 122:

            res.status(200).send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });

            // console.log("courseRes", courseRes);
            // res.send(courseRes);
            _context8.next = 128;
            break;

          case 125:
            _context8.prev = 125;
            _context8.t4 = _context8["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context8.t4.message || "Some error occurred while updating."
            });

          case 128:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 125], [15, 55, 59, 67], [26, 38, 42, 50], [43,, 45, 49], [60,, 62, 66], [70, 110, 114, 122], [81, 93, 97, 105], [98,, 100, 104], [115,, 117, 121]]);
  }));

  return function updateCourseIdForm3(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

var deleteCourseIdForm3 = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
    var courseId, courseRes, majorRes, typeCourseRes, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator11, _step9, iterator, id, subject_majors, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator13, _step11, iteratorSubject, _id3, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator12, _step10, _iterator14, subject_type_courses, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator15, _step12, _iteratorSubject3, _id4;

    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            courseId = req.params.courseId;

            if (req.body) {
              _context9.next = 5;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context9.abrupt("return");

          case 5:
            _context9.next = 7;
            return Course.findByPk(courseId);

          case 7:
            courseRes = _context9.sent;

            if (courseRes) {
              _context9.next = 11;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Log (CourseId: " + courseId + ") was not found."
            });
            return _context9.abrupt("return");

          case 11:
            _context9.next = 13;
            return Major.findAll({
              include: SubjectMajor,
              where: { courseId: courseId }
            });

          case 13:
            majorRes = _context9.sent;
            _context9.next = 16;
            return TypeCourse.findAll({
              where: { courseId: courseId },
              include: SubjectTypeCourse
            });

          case 16:
            typeCourseRes = _context9.sent;
            _iteratorNormalCompletion9 = true;
            _didIteratorError9 = false;
            _iteratorError9 = undefined;
            _context9.prev = 20;
            _iterator11 = (0, _getIterator3.default)(majorRes);

          case 22:
            if (_iteratorNormalCompletion9 = (_step9 = _iterator11.next()).done) {
              _context9.next = 57;
              break;
            }

            iterator = _step9.value;
            id = iterator.id, subject_majors = iterator.subject_majors;
            _context9.next = 27;
            return Major.destroy({
              where: { id: id }
            });

          case 27:
            _iteratorNormalCompletion11 = true;
            _didIteratorError11 = false;
            _iteratorError11 = undefined;
            _context9.prev = 30;
            _iterator13 = (0, _getIterator3.default)(subject_majors);

          case 32:
            if (_iteratorNormalCompletion11 = (_step11 = _iterator13.next()).done) {
              _context9.next = 40;
              break;
            }

            iteratorSubject = _step11.value;
            _id3 = iteratorSubject.id;
            _context9.next = 37;
            return SubjectMajor.destroy({
              where: { id: _id3 }
            });

          case 37:
            _iteratorNormalCompletion11 = true;
            _context9.next = 32;
            break;

          case 40:
            _context9.next = 46;
            break;

          case 42:
            _context9.prev = 42;
            _context9.t0 = _context9["catch"](30);
            _didIteratorError11 = true;
            _iteratorError11 = _context9.t0;

          case 46:
            _context9.prev = 46;
            _context9.prev = 47;

            if (!_iteratorNormalCompletion11 && _iterator13.return) {
              _iterator13.return();
            }

          case 49:
            _context9.prev = 49;

            if (!_didIteratorError11) {
              _context9.next = 52;
              break;
            }

            throw _iteratorError11;

          case 52:
            return _context9.finish(49);

          case 53:
            return _context9.finish(46);

          case 54:
            _iteratorNormalCompletion9 = true;
            _context9.next = 22;
            break;

          case 57:
            _context9.next = 63;
            break;

          case 59:
            _context9.prev = 59;
            _context9.t1 = _context9["catch"](20);
            _didIteratorError9 = true;
            _iteratorError9 = _context9.t1;

          case 63:
            _context9.prev = 63;
            _context9.prev = 64;

            if (!_iteratorNormalCompletion9 && _iterator11.return) {
              _iterator11.return();
            }

          case 66:
            _context9.prev = 66;

            if (!_didIteratorError9) {
              _context9.next = 69;
              break;
            }

            throw _iteratorError9;

          case 69:
            return _context9.finish(66);

          case 70:
            return _context9.finish(63);

          case 71:
            _iteratorNormalCompletion10 = true;
            _didIteratorError10 = false;
            _iteratorError10 = undefined;
            _context9.prev = 74;
            _iterator12 = (0, _getIterator3.default)(typeCourseRes);

          case 76:
            if (_iteratorNormalCompletion10 = (_step10 = _iterator12.next()).done) {
              _context9.next = 111;
              break;
            }

            _iterator14 = _step10.value;
            id = _iterator14.id, subject_type_courses = _iterator14.subject_type_courses;
            _context9.next = 81;
            return Major.destroy({
              where: { id: id }
            });

          case 81:
            _iteratorNormalCompletion12 = true;
            _didIteratorError12 = false;
            _iteratorError12 = undefined;
            _context9.prev = 84;
            _iterator15 = (0, _getIterator3.default)(subject_type_courses);

          case 86:
            if (_iteratorNormalCompletion12 = (_step12 = _iterator15.next()).done) {
              _context9.next = 94;
              break;
            }

            _iteratorSubject3 = _step12.value;
            _id4 = _iteratorSubject3.id;
            _context9.next = 91;
            return SubjectMajor.destroy({
              where: { id: _id4 }
            });

          case 91:
            _iteratorNormalCompletion12 = true;
            _context9.next = 86;
            break;

          case 94:
            _context9.next = 100;
            break;

          case 96:
            _context9.prev = 96;
            _context9.t2 = _context9["catch"](84);
            _didIteratorError12 = true;
            _iteratorError12 = _context9.t2;

          case 100:
            _context9.prev = 100;
            _context9.prev = 101;

            if (!_iteratorNormalCompletion12 && _iterator15.return) {
              _iterator15.return();
            }

          case 103:
            _context9.prev = 103;

            if (!_didIteratorError12) {
              _context9.next = 106;
              break;
            }

            throw _iteratorError12;

          case 106:
            return _context9.finish(103);

          case 107:
            return _context9.finish(100);

          case 108:
            _iteratorNormalCompletion10 = true;
            _context9.next = 76;
            break;

          case 111:
            _context9.next = 117;
            break;

          case 113:
            _context9.prev = 113;
            _context9.t3 = _context9["catch"](74);
            _didIteratorError10 = true;
            _iteratorError10 = _context9.t3;

          case 117:
            _context9.prev = 117;
            _context9.prev = 118;

            if (!_iteratorNormalCompletion10 && _iterator12.return) {
              _iterator12.return();
            }

          case 120:
            _context9.prev = 120;

            if (!_didIteratorError10) {
              _context9.next = 123;
              break;
            }

            throw _iteratorError10;

          case 123:
            return _context9.finish(120);

          case 124:
            return _context9.finish(117);

          case 125:

            res.send({
              response_status: "SUCCESS",
              message: "Deleted successfully"
            });
            _context9.next = 131;
            break;

          case 128:
            _context9.prev = 128;
            _context9.t4 = _context9["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context9.t4.message || "Some error occurred while deleting."
            });

          case 131:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[0, 128], [20, 59, 63, 71], [30, 42, 46, 54], [47,, 49, 53], [64,, 66, 70], [74, 113, 117, 125], [84, 96, 100, 108], [101,, 103, 107], [118,, 120, 124]]);
  }));

  return function deleteCourseIdForm3(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.default = {
  create: create,
  findAll: findAll,
  findOne: findOne,
  update: update,
  remove: remove,
  form3: form3,
  getCourseIdForm3: getCourseIdForm3,
  updateCourseIdForm3: updateCourseIdForm3,
  deleteCourseIdForm3: deleteCourseIdForm3
};
//# sourceMappingURL=major.controller copy.js.map