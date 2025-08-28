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
    Coursesoffered = _models2.default.Coursesoffered,
    SubjectTypeCourse = _models2.default.SubjectTypeCourse,
    Course = _models2.default.Course,
    SubCoursesOffered = _models2.default.SubCoursesOffered;

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
    var _req$body, majors, typeCourse, courseId, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterator, subject, majorData, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _iterator3, typeCourseData;

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

            // // // majors for

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context6.prev = 8;
            _iterator = (0, _getIterator3.default)(majors);

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context6.next = 19;
              break;
            }

            iterator = _step.value;
            subject = iterator.subject;
            _context6.next = 15;
            return Major.create((0, _extends3.default)({}, iterator, {
              courseId: courseId,
              courses_offered_arr: subject
            }));

          case 15:
            majorData = _context6.sent;

          case 16:
            _iteratorNormalCompletion = true;
            _context6.next = 10;
            break;

          case 19:
            _context6.next = 25;
            break;

          case 21:
            _context6.prev = 21;
            _context6.t0 = _context6["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context6.t0;

          case 25:
            _context6.prev = 25;
            _context6.prev = 26;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 28:
            _context6.prev = 28;

            if (!_didIteratorError) {
              _context6.next = 31;
              break;
            }

            throw _iteratorError;

          case 31:
            return _context6.finish(28);

          case 32:
            return _context6.finish(25);

          case 33:

            // // // typeCourse for loop
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context6.prev = 36;
            _iterator2 = (0, _getIterator3.default)(typeCourse);

          case 38:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context6.next = 47;
              break;
            }

            _iterator3 = _step2.value;
            subject = _iterator3.subject;
            _context6.next = 43;
            return TypeCourse.create((0, _extends3.default)({}, _iterator3, {
              courseId: courseId,
              courses_offered_arr: subject
            }));

          case 43:
            typeCourseData = _context6.sent;

          case 44:
            _iteratorNormalCompletion2 = true;
            _context6.next = 38;
            break;

          case 47:
            _context6.next = 53;
            break;

          case 49:
            _context6.prev = 49;
            _context6.t1 = _context6["catch"](36);
            _didIteratorError2 = true;
            _iteratorError2 = _context6.t1;

          case 53:
            _context6.prev = 53;
            _context6.prev = 54;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 56:
            _context6.prev = 56;

            if (!_didIteratorError2) {
              _context6.next = 59;
              break;
            }

            throw _iteratorError2;

          case 59:
            return _context6.finish(56);

          case 60:
            return _context6.finish(53);

          case 61:

            res.status(201).send({
              response_status: "SUCCESS",
              // data,
              // resultMajor: resultMajor[0].id,
              data: req.body
            });
            _context6.next = 67;
            break;

          case 64:
            _context6.prev = 64;
            _context6.t2 = _context6["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context6.t2.message || "Some error occurred while creating."
            });

          case 67:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 64], [8, 21, 25, 33], [26,, 28, 32], [36, 49, 53, 61], [54,, 56, 60]]);
  }));

  return function form3(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var getCourseIdForm3 = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var courseId, courseRes, majorRes, typeCourseRes, newMajorRes, newTypeCourseRes, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator4, _step3, iterator, courses_offered_arr, arrCourses_offereds, courses_offereds, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator6, _step5, item, id, coursesofferedRes, _payload, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator5, _step4, _iterator7, _arrCourses_offereds, _courses_offereds, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator8, _step6, _item, _coursesofferedRes, _payload2, payload;

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
              // include: Coursesoffered,
              where: { courseId: courseId }
            });

          case 7:
            majorRes = _context7.sent;
            _context7.next = 10;
            return TypeCourse.findAll({
              where: { courseId: courseId }
            });

          case 10:
            typeCourseRes = _context7.sent;
            newMajorRes = [];
            newTypeCourseRes = [];

            // newMajorRes

            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context7.prev = 16;
            _iterator4 = (0, _getIterator3.default)(majorRes);

          case 18:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator4.next()).done) {
              _context7.next = 57;
              break;
            }

            iterator = _step3.value;
            courses_offered_arr = iterator.courses_offered_arr;
            arrCourses_offereds = JSON.parse(courses_offered_arr);
            courses_offereds = [];
            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context7.prev = 26;
            _iterator6 = (0, _getIterator3.default)(arrCourses_offereds);

          case 28:
            if (_iteratorNormalCompletion5 = (_step5 = _iterator6.next()).done) {
              _context7.next = 38;
              break;
            }

            item = _step5.value;
            id = item.id;
            _context7.next = 33;
            return Coursesoffered.findByPk(id);

          case 33:
            coursesofferedRes = _context7.sent;

            courses_offereds.push(coursesofferedRes);

          case 35:
            _iteratorNormalCompletion5 = true;
            _context7.next = 28;
            break;

          case 38:
            _context7.next = 44;
            break;

          case 40:
            _context7.prev = 40;
            _context7.t0 = _context7["catch"](26);
            _didIteratorError5 = true;
            _iteratorError5 = _context7.t0;

          case 44:
            _context7.prev = 44;
            _context7.prev = 45;

            if (!_iteratorNormalCompletion5 && _iterator6.return) {
              _iterator6.return();
            }

          case 47:
            _context7.prev = 47;

            if (!_didIteratorError5) {
              _context7.next = 50;
              break;
            }

            throw _iteratorError5;

          case 50:
            return _context7.finish(47);

          case 51:
            return _context7.finish(44);

          case 52:
            _payload = (0, _extends3.default)({}, iterator.dataValues, {
              subject: courses_offereds
            });

            newMajorRes.push(_payload);

          case 54:
            _iteratorNormalCompletion3 = true;
            _context7.next = 18;
            break;

          case 57:
            _context7.next = 63;
            break;

          case 59:
            _context7.prev = 59;
            _context7.t1 = _context7["catch"](16);
            _didIteratorError3 = true;
            _iteratorError3 = _context7.t1;

          case 63:
            _context7.prev = 63;
            _context7.prev = 64;

            if (!_iteratorNormalCompletion3 && _iterator4.return) {
              _iterator4.return();
            }

          case 66:
            _context7.prev = 66;

            if (!_didIteratorError3) {
              _context7.next = 69;
              break;
            }

            throw _iteratorError3;

          case 69:
            return _context7.finish(66);

          case 70:
            return _context7.finish(63);

          case 71:
            // newMajorRes

            //newTypeCourseRes
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context7.prev = 74;
            _iterator5 = (0, _getIterator3.default)(typeCourseRes);

          case 76:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator5.next()).done) {
              _context7.next = 115;
              break;
            }

            _iterator7 = _step4.value;
            courses_offered_arr = _iterator7.courses_offered_arr;
            _arrCourses_offereds = JSON.parse(courses_offered_arr);
            _courses_offereds = [];
            _iteratorNormalCompletion6 = true;
            _didIteratorError6 = false;
            _iteratorError6 = undefined;
            _context7.prev = 84;
            _iterator8 = (0, _getIterator3.default)(_arrCourses_offereds);

          case 86:
            if (_iteratorNormalCompletion6 = (_step6 = _iterator8.next()).done) {
              _context7.next = 96;
              break;
            }

            _item = _step6.value;
            id = _item.id;
            _context7.next = 91;
            return Coursesoffered.findByPk(id);

          case 91:
            _coursesofferedRes = _context7.sent;

            _courses_offereds.push(_coursesofferedRes);

          case 93:
            _iteratorNormalCompletion6 = true;
            _context7.next = 86;
            break;

          case 96:
            _context7.next = 102;
            break;

          case 98:
            _context7.prev = 98;
            _context7.t2 = _context7["catch"](84);
            _didIteratorError6 = true;
            _iteratorError6 = _context7.t2;

          case 102:
            _context7.prev = 102;
            _context7.prev = 103;

            if (!_iteratorNormalCompletion6 && _iterator8.return) {
              _iterator8.return();
            }

          case 105:
            _context7.prev = 105;

            if (!_didIteratorError6) {
              _context7.next = 108;
              break;
            }

            throw _iteratorError6;

          case 108:
            return _context7.finish(105);

          case 109:
            return _context7.finish(102);

          case 110:
            _payload2 = (0, _extends3.default)({}, _iterator7.dataValues, {
              subject: _courses_offereds
            });

            newTypeCourseRes.push(_payload2);

          case 112:
            _iteratorNormalCompletion4 = true;
            _context7.next = 76;
            break;

          case 115:
            _context7.next = 121;
            break;

          case 117:
            _context7.prev = 117;
            _context7.t3 = _context7["catch"](74);
            _didIteratorError4 = true;
            _iteratorError4 = _context7.t3;

          case 121:
            _context7.prev = 121;
            _context7.prev = 122;

            if (!_iteratorNormalCompletion4 && _iterator5.return) {
              _iterator5.return();
            }

          case 124:
            _context7.prev = 124;

            if (!_didIteratorError4) {
              _context7.next = 127;
              break;
            }

            throw _iteratorError4;

          case 127:
            return _context7.finish(124);

          case 128:
            return _context7.finish(121);

          case 129:
            if (courseRes) {
              _context7.next = 132;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context7.abrupt("return");

          case 132:
            payload = {
              courseId: courseId,
              course: (0, _extends3.default)({}, courseRes.dataValues),
              majors: newMajorRes,
              typeCourse: newTypeCourseRes
            };


            res.send({
              response_status: "SUCCESS",
              data: payload
            });
            _context7.next = 139;
            break;

          case 136:
            _context7.prev = 136;
            _context7.t4 = _context7["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context7.t4.message || "Some error occurred while finding."
            });

          case 139:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[0, 136], [16, 59, 63, 71], [26, 40, 44, 52], [45,, 47, 51], [64,, 66, 70], [74, 117, 121, 129], [84, 98, 102, 110], [103,, 105, 109], [122,, 124, 128]]);
  }));

  return function getCourseIdForm3(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var updateCourseIdForm3 = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
    var courseId, _req$body2, majors, typeCourse, courseRes, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator9, _step7, iterator, subject, id, majorData, _majorData, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator10, _step8, _iterator11, typeCourseData, _typeCourseData;

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
            _iteratorNormalCompletion7 = true;
            _didIteratorError7 = false;
            _iteratorError7 = undefined;
            _context8.prev = 15;
            _iterator9 = (0, _getIterator3.default)(majors);

          case 17:
            if (_iteratorNormalCompletion7 = (_step7 = _iterator9.next()).done) {
              _context8.next = 32;
              break;
            }

            iterator = _step7.value;

            // const id = iterator.id ? iterator.id : null;
            subject = iterator.subject, id = iterator.id;

            if (!id) {
              _context8.next = 26;
              break;
            }

            _context8.next = 23;
            return Major.update((0, _extends3.default)({}, iterator, { courses_offered_arr: subject, courseId: courseId }), {
              where: { id: id }
            });

          case 23:
            majorData = _context8.sent;
            _context8.next = 29;
            break;

          case 26:
            _context8.next = 28;
            return Major.create((0, _extends3.default)({}, iterator, {
              courses_offered_arr: subject,
              courseId: courseId
            }));

          case 28:
            _majorData = _context8.sent;

          case 29:
            _iteratorNormalCompletion7 = true;
            _context8.next = 17;
            break;

          case 32:
            _context8.next = 38;
            break;

          case 34:
            _context8.prev = 34;
            _context8.t0 = _context8["catch"](15);
            _didIteratorError7 = true;
            _iteratorError7 = _context8.t0;

          case 38:
            _context8.prev = 38;
            _context8.prev = 39;

            if (!_iteratorNormalCompletion7 && _iterator9.return) {
              _iterator9.return();
            }

          case 41:
            _context8.prev = 41;

            if (!_didIteratorError7) {
              _context8.next = 44;
              break;
            }

            throw _iteratorError7;

          case 44:
            return _context8.finish(41);

          case 45:
            return _context8.finish(38);

          case 46:

            // // typeCourse for loop
            _iteratorNormalCompletion8 = true;
            _didIteratorError8 = false;
            _iteratorError8 = undefined;
            _context8.prev = 49;
            _iterator10 = (0, _getIterator3.default)(typeCourse);

          case 51:
            if (_iteratorNormalCompletion8 = (_step8 = _iterator10.next()).done) {
              _context8.next = 66;
              break;
            }

            _iterator11 = _step8.value;
            subject = _iterator11.subject, id = _iterator11.id;

            if (!id) {
              _context8.next = 60;
              break;
            }

            _context8.next = 57;
            return TypeCourse.update((0, _extends3.default)({}, _iterator11, { courses_offered_arr: subject, courseId: courseId }), {
              where: { id: id }
            });

          case 57:
            typeCourseData = _context8.sent;
            _context8.next = 63;
            break;

          case 60:
            _context8.next = 62;
            return TypeCourse.create((0, _extends3.default)({}, _iterator11, {
              courses_offered_arr: subject,
              courseId: courseId
            }));

          case 62:
            _typeCourseData = _context8.sent;

          case 63:
            _iteratorNormalCompletion8 = true;
            _context8.next = 51;
            break;

          case 66:
            _context8.next = 72;
            break;

          case 68:
            _context8.prev = 68;
            _context8.t1 = _context8["catch"](49);
            _didIteratorError8 = true;
            _iteratorError8 = _context8.t1;

          case 72:
            _context8.prev = 72;
            _context8.prev = 73;

            if (!_iteratorNormalCompletion8 && _iterator10.return) {
              _iterator10.return();
            }

          case 75:
            _context8.prev = 75;

            if (!_didIteratorError8) {
              _context8.next = 78;
              break;
            }

            throw _iteratorError8;

          case 78:
            return _context8.finish(75);

          case 79:
            return _context8.finish(72);

          case 80:

            res.status(200).send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });

            // console.log("courseRes", courseRes);
            // res.send(courseRes);
            _context8.next = 86;
            break;

          case 83:
            _context8.prev = 83;
            _context8.t2 = _context8["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context8.t2.message || "Some error occurred while updating."
            });

          case 86:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 83], [15, 34, 38, 46], [39,, 41, 45], [49, 68, 72, 80], [73,, 75, 79]]);
  }));

  return function updateCourseIdForm3(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

var deleteCourseIdForm3 = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
    var courseId, courseRes;
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
            return Major.destroy({
              where: { courseId: courseId }
            });

          case 13:
            _context9.next = 15;
            return TypeCourse.destroy({
              where: { courseId: courseId }
            });

          case 15:

            res.send({
              response_status: "SUCCESS",
              message: "Deleted successfully"
            });
            _context9.next = 21;
            break;

          case 18:
            _context9.prev = 18;
            _context9.t0 = _context9["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context9.t0.message || "Some error occurred while deleting."
            });

          case 21:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[0, 18]]);
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
//# sourceMappingURL=major.controller.js.map