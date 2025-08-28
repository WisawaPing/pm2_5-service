"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var include = ["facualty", "level", "major"];

var _require = require("sequelize"),
    Op = _require.Op;

var Course = _models2.default.Course,
    Semester = _models2.default.Semester,
    StudyDayTime = _models2.default.StudyDayTime;


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
            return Course.create(req.body);

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

var updateForm6 = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var _req$body, id, job_opportunities_th, job_opportunities_en, img_url, showImage, semesters, study_day_times, courseId, courseResById, payloadCourseUpdate, resultUpdate, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterator, _id, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _iterator3, _id2;

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
            _req$body = req.body, id = _req$body.id, job_opportunities_th = _req$body.job_opportunities_th, job_opportunities_en = _req$body.job_opportunities_en, img_url = _req$body.img_url, showImage = _req$body.showImage, semesters = _req$body.semesters, study_day_times = _req$body.study_day_times, courseId = _req$body.courseId;
            _context2.next = 7;
            return Course.findByPk(id);

          case 7:
            courseResById = _context2.sent;

            if (courseResById) {
              _context2.next = 11;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context2.abrupt("return");

          case 11:
            payloadCourseUpdate = {
              img_url_more_detail: img_url,
              show_image_more_detail: showImage,
              job_opportunities_th_more_detail: job_opportunities_th,
              job_opportunities_en_more_detail: job_opportunities_en
            };
            _context2.next = 14;
            return Course.update(payloadCourseUpdate, {
              where: { id: id }
            });

          case 14:
            resultUpdate = _context2.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 18;
            _iterator = (0, _getIterator3.default)(semesters);

          case 20:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 33;
              break;
            }

            iterator = _step.value;
            _id = iterator.id;

            if (!_id) {
              _context2.next = 28;
              break;
            }

            _context2.next = 26;
            return Semester.update(iterator, {
              where: { id: _id }
            });

          case 26:
            _context2.next = 30;
            break;

          case 28:
            _context2.next = 30;
            return Semester.create((0, _extends3.default)({}, iterator, {
              courseId: courseId
            }));

          case 30:
            _iteratorNormalCompletion = true;
            _context2.next = 20;
            break;

          case 33:
            _context2.next = 39;
            break;

          case 35:
            _context2.prev = 35;
            _context2.t0 = _context2["catch"](18);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 39:
            _context2.prev = 39;
            _context2.prev = 40;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 42:
            _context2.prev = 42;

            if (!_didIteratorError) {
              _context2.next = 45;
              break;
            }

            throw _iteratorError;

          case 45:
            return _context2.finish(42);

          case 46:
            return _context2.finish(39);

          case 47:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 50;
            _iterator2 = (0, _getIterator3.default)(study_day_times);

          case 52:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context2.next = 65;
              break;
            }

            _iterator3 = _step2.value;
            _id2 = _iterator3.id;

            if (!_id2) {
              _context2.next = 60;
              break;
            }

            _context2.next = 58;
            return StudyDayTime.update(_iterator3, {
              where: { id: _id2 }
            });

          case 58:
            _context2.next = 62;
            break;

          case 60:
            _context2.next = 62;
            return StudyDayTime.create((0, _extends3.default)({}, _iterator3, {
              courseId: courseId
            }));

          case 62:
            _iteratorNormalCompletion2 = true;
            _context2.next = 52;
            break;

          case 65:
            _context2.next = 71;
            break;

          case 67:
            _context2.prev = 67;
            _context2.t1 = _context2["catch"](50);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t1;

          case 71:
            _context2.prev = 71;
            _context2.prev = 72;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 74:
            _context2.prev = 74;

            if (!_didIteratorError2) {
              _context2.next = 77;
              break;
            }

            throw _iteratorError2;

          case 77:
            return _context2.finish(74);

          case 78:
            return _context2.finish(71);

          case 79:

            res.status(200).send({
              response_status: "SUCCESS"
            });
            _context2.next = 85;
            break;

          case 82:
            _context2.prev = 82;
            _context2.t2 = _context2["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context2.t2.message || "Some error occurred while creating."
            });

          case 85:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 82], [18, 35, 39, 47], [40,, 42, 46], [50, 67, 71, 79], [72,, 74, 78]]);
  }));

  return function updateForm6(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var createForm6 = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var _req$body2, courseId, job_opportunities_th, job_opportunities_en, img_url, showImage, semesters, study_day_times, courseResById, payloadCourseUpdate, resultUpdate, payloadSemester, payloadStudyDayTime, semesterRes, studyDayTimeRes;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (req.body) {
              _context3.next = 4;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context3.abrupt("return");

          case 4:
            _req$body2 = req.body, courseId = _req$body2.courseId, job_opportunities_th = _req$body2.job_opportunities_th, job_opportunities_en = _req$body2.job_opportunities_en, img_url = _req$body2.img_url, showImage = _req$body2.showImage, semesters = _req$body2.semesters, study_day_times = _req$body2.study_day_times;
            _context3.next = 7;
            return Course.findByPk(courseId);

          case 7:
            courseResById = _context3.sent;

            if (courseResById) {
              _context3.next = 11;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context3.abrupt("return");

          case 11:
            payloadCourseUpdate = {
              img_url_more_detail: img_url,
              show_image_more_detail: showImage,
              job_opportunities_th_more_detail: job_opportunities_th,
              job_opportunities_en_more_detail: job_opportunities_en
            };
            _context3.next = 14;
            return Course.update(payloadCourseUpdate, {
              where: { id: courseId }
            });

          case 14:
            resultUpdate = _context3.sent;

            if (!(resultUpdate != 1)) {
              _context3.next = 18;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(courseId: " + courseId + ") was not found."
            });
            return _context3.abrupt("return");

          case 18:
            payloadSemester = semesters.map(function (value) {
              return (0, _extends3.default)({}, value, {
                courseId: courseId
              });
            });
            payloadStudyDayTime = study_day_times.map(function (value) {
              return (0, _extends3.default)({}, value, {
                courseId: courseId
              });
            });
            _context3.next = 22;
            return Semester.bulkCreate(payloadSemester);

          case 22:
            semesterRes = _context3.sent;
            _context3.next = 25;
            return StudyDayTime.bulkCreate(payloadStudyDayTime);

          case 25:
            studyDayTimeRes = _context3.sent;


            res.status(201).send({
              response_status: "SUCCESS"
            });
            _context3.next = 32;
            break;

          case 29:
            _context3.prev = 29;
            _context3.t0 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t0.message || "Some error occurred while creating."
            });

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 29]]);
  }));

  return function createForm6(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var findOneForm6 = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var id, includeForm6, data, semesters, study_day_times, img_url_more_detail, show_image_more_detail, job_opportunities_th_more_detail, job_opportunities_en_more_detail, form6;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            includeForm6 = [Semester, StudyDayTime];
            _context4.next = 5;
            return Course.findByPk(id, { include: includeForm6 });

          case 5:
            data = _context4.sent;

            if (data) {
              _context4.next = 9;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context4.abrupt("return");

          case 9:
            semesters = data.semesters, study_day_times = data.study_day_times, img_url_more_detail = data.img_url_more_detail, show_image_more_detail = data.show_image_more_detail, job_opportunities_th_more_detail = data.job_opportunities_th_more_detail, job_opportunities_en_more_detail = data.job_opportunities_en_more_detail;
            form6 = {
              id: data.id,
              img_url: img_url_more_detail,
              showImage: show_image_more_detail,
              job_opportunities_th: job_opportunities_th_more_detail,
              job_opportunities_en: job_opportunities_en_more_detail,
              semesters: semesters,
              study_day_times: study_day_times
            };


            res.send({
              response_status: "SUCCESS",
              form6: form6
            });
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context4.t0.message || "Some error occurred while finding."
            });

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 14]]);
  }));

  return function findOneForm6(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var updateIndex = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var items, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator4, _step3, item, id, index, result;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            items = req.body;
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context5.prev = 5;
            _iterator4 = (0, _getIterator3.default)(items);

          case 7:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator4.next()).done) {
              _context5.next = 20;
              break;
            }

            item = _step3.value;
            id = item.id, index = item.index;
            _context5.next = 12;
            return Course.update({ index: index }, {
              where: { id: id }
            });

          case 12:
            result = _context5.sent;


            console.log("result", result);

            if (!(result[0] !== 1)) {
              _context5.next = 17;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context5.abrupt("return");

          case 17:
            _iteratorNormalCompletion3 = true;
            _context5.next = 7;
            break;

          case 20:
            _context5.next = 26;
            break;

          case 22:
            _context5.prev = 22;
            _context5.t0 = _context5["catch"](5);
            _didIteratorError3 = true;
            _iteratorError3 = _context5.t0;

          case 26:
            _context5.prev = 26;
            _context5.prev = 27;

            if (!_iteratorNormalCompletion3 && _iterator4.return) {
              _iterator4.return();
            }

          case 29:
            _context5.prev = 29;

            if (!_didIteratorError3) {
              _context5.next = 32;
              break;
            }

            throw _iteratorError3;

          case 32:
            return _context5.finish(29);

          case 33:
            return _context5.finish(26);

          case 34:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context5.next = 40;
            break;

          case 37:
            _context5.prev = 37;
            _context5.t1 = _context5["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context5.t1.message || "Some error occurred while updating."
            });

          case 40:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, undefined, [[0, 37], [5, 22, 26, 34], [27,, 29, 33]]);
  }));

  return function updateIndex(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var findAll = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var query, offset, limit, page, where, resultRes;
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


            if (query.searchGlobal) {
              where = {};
              where[Op.or] = [{
                title_th: (0, _defineProperty3.default)({}, Op.like, "%" + query.searchGlobal + "%")
              }, {
                title_en: (0, _defineProperty3.default)({}, Op.like, "%" + query.searchGlobal + "%")
              }];
            }

            _context6.next = 8;
            return Course.findAll({
              limit: limit,
              offset: offset,
              where: where,
              include: include,
              order: [["index", "ASC"], ["createdAt", "DESC"]]
            });

          case 8:
            resultRes = _context6.sent;


            console.log("query ", query);
            // console.log("limit ", limit);
            // console.log("offset ", offset);

            if (resultRes) {
              _context6.next = 13;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context6.abrupt("return");

          case 13:
            res.status(200).send({
              response_status: "SUCCESS",
              data: resultRes
            });
            _context6.next = 19;
            break;

          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context6.t0.message || "Some error occurred while finding."
            });

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[0, 16]]);
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
            return Course.findByPk(id, { include: include });

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
            return Course.update(req.body, {
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
            return Course.destroy({
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
  updateIndex: updateIndex,
  findOne: findOne,
  update: update,
  remove: remove,
  createForm6: createForm6,
  findOneForm6: findOneForm6,
  updateForm6: updateForm6
};
//# sourceMappingURL=course.controller.js.map