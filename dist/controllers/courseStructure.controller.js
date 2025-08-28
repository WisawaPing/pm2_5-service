"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CourseStructure = _models2.default.CourseStructure,
    CourseFormat = _models2.default.CourseFormat,
    Course = _models2.default.Course;

var include = ["level", "facualty", "major"];

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
            return CourseStructure.create(req.body);

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

var form4 = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var _req$body, courseStructure, courseId, pyaload, data;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (req.body) {
              _context2.next = 4;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context2.abrupt("return");

          case 4:
            _req$body = req.body, courseStructure = _req$body.courseStructure, courseId = _req$body.courseId;
            pyaload = courseStructure.map(function (value) {
              return (0, _extends3.default)({}, value, {
                courseId: courseId
              });
            });

            // for (const iterator of courseStructure) {
            //   const data = await CourseStructure.create({
            //     ...iterator,
            //     courseId,
            //   });
            // }

            _context2.next = 8;
            return CourseStructure.bulkCreate(pyaload);

          case 8:
            data = _context2.sent;


            res.status(201).send({
              response_status: "SUCCESS",
              data: data
            });
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context2.t0.message || "Some error occurred while creating."
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 12]]);
  }));

  return function form4(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getform4 = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var courseId, _include, resultRes, course_structures, newResultRes, dataRes;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            courseId = req.params.courseId;

            // const where = { courseId };

            _include = [CourseStructure];
            // const resultRes = await CourseStructure.findAll({
            //   where,
            //   include,
            //   order: [
            //     ["createdAt", "ASC"],
            //     ["id", "ASC"],
            //   ],
            // });

            _context3.next = 5;
            return Course.findByPk(courseId, {
              include: _include,
              order: [["createdAt", "ASC"], ["id", "ASC"]]
            });

          case 5:
            resultRes = _context3.sent;

            if (resultRes) {
              _context3.next = 9;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context3.abrupt("return");

          case 9:
            course_structures = resultRes.dataValues.course_structures;


            delete resultRes.dataValues.course_structures;

            newResultRes = course_structures.map(function (value) {
              return (0, _extends3.default)({}, value.dataValues);
            });
            dataRes = (0, _extends3.default)({
              courseId: courseId
            }, resultRes.dataValues, {
              courseStructure: newResultRes
            });


            res.status(200).send({
              response_status: "SUCCESS",
              data: dataRes
            });
            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t0.message || "Some error occurred while finding."
            });

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 16]]);
  }));

  return function getform4(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var updateform4 = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var _req$body2, courseStructure, courseId, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterator, id, data, _data;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;

            if (req.body) {
              _context4.next = 4;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context4.abrupt("return");

          case 4:
            _req$body2 = req.body, courseStructure = _req$body2.courseStructure, courseId = _req$body2.courseId;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context4.prev = 8;
            _iterator = (0, _getIterator3.default)(courseStructure);

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context4.next = 25;
              break;
            }

            iterator = _step.value;
            id = iterator.id;

            if (!id) {
              _context4.next = 19;
              break;
            }

            _context4.next = 16;
            return CourseStructure.update((0, _extends3.default)({}, iterator, {
              courseId: courseId
            }), {
              where: { id: id }
            });

          case 16:
            data = _context4.sent;
            _context4.next = 22;
            break;

          case 19:
            _context4.next = 21;
            return CourseStructure.create((0, _extends3.default)({}, iterator, {
              courseId: courseId
            }));

          case 21:
            _data = _context4.sent;

          case 22:
            _iteratorNormalCompletion = true;
            _context4.next = 10;
            break;

          case 25:
            _context4.next = 31;
            break;

          case 27:
            _context4.prev = 27;
            _context4.t0 = _context4["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context4.t0;

          case 31:
            _context4.prev = 31;
            _context4.prev = 32;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 34:
            _context4.prev = 34;

            if (!_didIteratorError) {
              _context4.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context4.finish(34);

          case 38:
            return _context4.finish(31);

          case 39:

            res.status(200).send({
              response_status: "SUCCESS"
              // data,
            });
            _context4.next = 45;
            break;

          case 42:
            _context4.prev = 42;
            _context4.t1 = _context4["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context4.t1.message || "Some error occurred while creating."
            });

          case 45:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 42], [8, 27, 31, 39], [32,, 34, 38]]);
  }));

  return function updateform4(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var removeform4 = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var courseId, result;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            courseId = req.params.courseId;
            _context5.next = 4;
            return CourseStructure.destroy({
              where: { courseId: courseId }
            });

          case 4:
            result = _context5.sent;


            // if (result !== 1) {
            //   res.status(200).send({
            //     response_status: "ERROR",
            //     message: `Log (courseId: ${courseId}) was not found.`,
            //   });
            //   return;
            // }

            res.send({
              response_status: "SUCCESS",
              message: "Deleted successfully"
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context5.t0.message || "Some error occurred while deleting."
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 8]]);
  }));

  return function removeform4(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var findAll = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var query, offset, limit, page, where, resultRes, newResult, index, element, id, resultCourseFormat, data;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
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
            _context6.next = 7;
            return CourseStructure.findAll({
              limit: limit,
              offset: offset,
              where: where,
              include: include,
              order: [["createdAt", "DESC"], ["id", "DESC"]]
            });

          case 7:
            resultRes = _context6.sent;

            if (resultRes) {
              _context6.next = 11;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context6.abrupt("return");

          case 11:
            newResult = [];
            index = 0;
            index;

          case 14:
            if (!(index < resultRes.length)) {
              _context6.next = 25;
              break;
            }

            element = resultRes[index];
            id = element.dataValues.id;
            _context6.next = 19;
            return CourseFormat.findAll({
              where: { courseStructureId: id }
            });

          case 19:
            resultCourseFormat = _context6.sent;
            data = (0, _extends3.default)({}, element.dataValues, {
              courseFormat: resultCourseFormat
            });


            newResult.push(data);

          case 22:
            index++;
            _context6.next = 14;
            break;

          case 25:

            res.status(200).send({
              response_status: "SUCCESS",
              data: newResult
            });
            _context6.next = 31;
            break;

          case 28:
            _context6.prev = 28;
            _context6.t0 = _context6["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context6.t0.message || "Some error occurred while finding."
            });

          case 31:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 28]]);
  }));

  return function findAll(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var id, data;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return CourseStructure.findByPk(id, { include: include });

          case 4:
            data = _context7.sent;

            if (data) {
              _context7.next = 8;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context7.abrupt("return");

          case 8:

            res.send({
              response_status: "SUCCESS",
              data: data
            });
            _context7.next = 14;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context7.t0.message || "Some error occurred while finding."
            });

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, undefined, [[0, 11]]);
  }));

  return function findOne(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var update = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
    var id, result;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            _context8.next = 4;
            return CourseStructure.update(req.body, {
              where: { id: id }
            });

          case 4:
            result = _context8.sent;


            console.log("result", result);

            if (!(result != 1)) {
              _context8.next = 9;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context8.abrupt("return");

          case 9:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context8.next = 15;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context8.t0.message || "Some error occurred while updating."
            });

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, undefined, [[0, 12]]);
  }));

  return function update(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

var remove = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
    var id, result;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = req.params.id;
            _context9.next = 4;
            return CourseStructure.destroy({
              where: { id: id }
            });

          case 4:
            result = _context9.sent;

            if (!(result !== 1)) {
              _context9.next = 8;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Log (ID: " + id + ") was not found."
            });
            return _context9.abrupt("return");

          case 8:

            res.send({
              response_status: "SUCCESS",
              message: "Deleted successfully"
            });
            _context9.next = 14;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context9.t0.message || "Some error occurred while deleting."
            });

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, undefined, [[0, 11]]);
  }));

  return function remove(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.default = {
  create: create,
  findAll: findAll,
  findOne: findOne,
  update: update,
  remove: remove,
  form4: form4,
  getform4: getform4,
  updateform4: updateform4,
  removeform4: removeform4
};
//# sourceMappingURL=courseStructure.controller.js.map