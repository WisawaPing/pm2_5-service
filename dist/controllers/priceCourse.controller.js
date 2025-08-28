"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PriceCourse = _models2.default.PriceCourse,
    PriceItem = _models2.default.PriceItem,
    Course = _models2.default.Course,
    TypeCourse = _models2.default.TypeCourse;

var include = [{
  model: PriceItem,
  include: [TypeCourse]
}, Course];

var createForm5 = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var _req$body, priceCourse, courseId, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

    return _regenerator2.default.wrap(function _callee$(_context2) {
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
            _req$body = req.body, priceCourse = _req$body.priceCourse, courseId = _req$body.courseId;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 8;
            _loop = /*#__PURE__*/_regenerator2.default.mark(function _loop() {
              var iterator, priceItems, iteratorRes, payload, priceItemsRes;
              return _regenerator2.default.wrap(function _loop$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      iterator = _step.value;
                      priceItems = iterator.priceItems;
                      _context.next = 4;
                      return PriceCourse.create((0, _extends3.default)({}, iterator, {
                        courseId: courseId
                      }));

                    case 4:
                      iteratorRes = _context.sent;
                      payload = priceItems.map(function (value) {
                        return (0, _extends3.default)({}, value, {
                          priceCourseId: iteratorRes.id
                        });
                      });
                      _context.next = 8;
                      return PriceItem.bulkCreate(payload);

                    case 8:
                      priceItemsRes = _context.sent;

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _loop, undefined);
            });
            _iterator = (0, _getIterator3.default)(priceCourse);

          case 11:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 16;
              break;
            }

            return _context2.delegateYield(_loop(), "t0", 13);

          case 13:
            _iteratorNormalCompletion = true;
            _context2.next = 11;
            break;

          case 16:
            _context2.next = 22;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t1 = _context2["catch"](8);
            _didIteratorError = true;
            _iteratorError = _context2.t1;

          case 22:
            _context2.prev = 22;
            _context2.prev = 23;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 25:
            _context2.prev = 25;

            if (!_didIteratorError) {
              _context2.next = 28;
              break;
            }

            throw _iteratorError;

          case 28:
            return _context2.finish(25);

          case 29:
            return _context2.finish(22);

          case 30:

            // if (!priceItemsRes) {
            //   res.send({
            //     response_status: "ERROR",
            //     message: err.message || "Some error occurred while creating.",
            //   });
            //   return;
            // }

            res.status(201).send({
              response_status: "SUCCESS"
              // data: priceItemsRes,
            });
            _context2.next = 36;
            break;

          case 33:
            _context2.prev = 33;
            _context2.t2 = _context2["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context2.t2.message || "Some error occurred while creating."
            });

          case 36:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, undefined, [[0, 33], [8, 18, 22, 30], [23,, 25, 29]]);
  }));

  return function createForm5(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateForm5 = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var _req$body2, priceCourse, courseId, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, iterator, priceItems, id, _iteratorRes, _iteratorRes2, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _iterator4, idPriceItem, iteratorPriceItemsRes, _iteratorPriceItemsRes;

    return _regenerator2.default.wrap(function _callee2$(_context3) {
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
            _req$body2 = req.body, priceCourse = _req$body2.priceCourse, courseId = _req$body2.courseId;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context3.prev = 8;
            _iterator2 = (0, _getIterator3.default)(priceCourse);

          case 10:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context3.next = 62;
              break;
            }

            iterator = _step2.value;
            priceItems = iterator.priceItems;
            id = null;

            id = iterator.id;

            if (!id) {
              _context3.next = 21;
              break;
            }

            _context3.next = 18;
            return PriceCourse.update((0, _extends3.default)({}, iterator, {
              courseId: courseId
            }), {
              where: { id: id }
            });

          case 18:
            _iteratorRes = _context3.sent;
            _context3.next = 25;
            break;

          case 21:
            _context3.next = 23;
            return PriceCourse.create((0, _extends3.default)({}, iterator, {
              courseId: courseId
            }));

          case 23:
            _iteratorRes2 = _context3.sent;

            id = _iteratorRes2.dataValues.id;

          case 25:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context3.prev = 28;
            _iterator3 = (0, _getIterator3.default)(priceItems);

          case 30:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context3.next = 45;
              break;
            }

            _iterator4 = _step3.value;

            // const { id } = iterator;
            idPriceItem = _iterator4.id;

            if (!idPriceItem) {
              _context3.next = 39;
              break;
            }

            _context3.next = 36;
            return PriceItem.update((0, _extends3.default)({}, _iterator4), {
              where: { id: idPriceItem }
            });

          case 36:
            iteratorPriceItemsRes = _context3.sent;
            _context3.next = 42;
            break;

          case 39:
            _context3.next = 41;
            return PriceItem.create((0, _extends3.default)({}, _iterator4, {
              priceCourseId: id
            }));

          case 41:
            _iteratorPriceItemsRes = _context3.sent;

          case 42:
            _iteratorNormalCompletion3 = true;
            _context3.next = 30;
            break;

          case 45:
            _context3.next = 51;
            break;

          case 47:
            _context3.prev = 47;
            _context3.t0 = _context3["catch"](28);
            _didIteratorError3 = true;
            _iteratorError3 = _context3.t0;

          case 51:
            _context3.prev = 51;
            _context3.prev = 52;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 54:
            _context3.prev = 54;

            if (!_didIteratorError3) {
              _context3.next = 57;
              break;
            }

            throw _iteratorError3;

          case 57:
            return _context3.finish(54);

          case 58:
            return _context3.finish(51);

          case 59:
            _iteratorNormalCompletion2 = true;
            _context3.next = 10;
            break;

          case 62:
            _context3.next = 68;
            break;

          case 64:
            _context3.prev = 64;
            _context3.t1 = _context3["catch"](8);
            _didIteratorError2 = true;
            _iteratorError2 = _context3.t1;

          case 68:
            _context3.prev = 68;
            _context3.prev = 69;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 71:
            _context3.prev = 71;

            if (!_didIteratorError2) {
              _context3.next = 74;
              break;
            }

            throw _iteratorError2;

          case 74:
            return _context3.finish(71);

          case 75:
            return _context3.finish(68);

          case 76:

            res.status(200).send({
              response_status: "SUCCESS"
              // data: priceItemsRes,
            });
            _context3.next = 82;
            break;

          case 79:
            _context3.prev = 79;
            _context3.t2 = _context3["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context3.t2.message || "Some error occurred while creating."
            });

          case 82:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, undefined, [[0, 79], [8, 64, 68, 76], [28, 47, 51, 59], [52,, 54, 58], [69,, 71, 75]]);
  }));

  return function updateForm5(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var deleteForm5 = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var courseId, result, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator5, _step4, iterator, price_items, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator6, _step5, _iterator7, id;

    return _regenerator2.default.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            courseId = req.params.courseId;
            _context4.next = 4;
            return PriceCourse.findAll({
              where: { courseId: courseId },
              include: [PriceItem]
            });

          case 4:
            result = _context4.sent;
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context4.prev = 8;
            _iterator5 = (0, _getIterator3.default)(result);

          case 10:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator5.next()).done) {
              _context4.next = 43;
              break;
            }

            iterator = _step4.value;
            price_items = iterator.price_items ? iterator.price_items : [];
            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context4.prev = 16;
            _iterator6 = (0, _getIterator3.default)(price_items);

          case 18:
            if (_iteratorNormalCompletion5 = (_step5 = _iterator6.next()).done) {
              _context4.next = 26;
              break;
            }

            _iterator7 = _step5.value;
            id = _iterator7.id;
            _context4.next = 23;
            return PriceItem.destroy({
              where: { id: id }
            });

          case 23:
            _iteratorNormalCompletion5 = true;
            _context4.next = 18;
            break;

          case 26:
            _context4.next = 32;
            break;

          case 28:
            _context4.prev = 28;
            _context4.t0 = _context4["catch"](16);
            _didIteratorError5 = true;
            _iteratorError5 = _context4.t0;

          case 32:
            _context4.prev = 32;
            _context4.prev = 33;

            if (!_iteratorNormalCompletion5 && _iterator6.return) {
              _iterator6.return();
            }

          case 35:
            _context4.prev = 35;

            if (!_didIteratorError5) {
              _context4.next = 38;
              break;
            }

            throw _iteratorError5;

          case 38:
            return _context4.finish(35);

          case 39:
            return _context4.finish(32);

          case 40:
            _iteratorNormalCompletion4 = true;
            _context4.next = 10;
            break;

          case 43:
            _context4.next = 49;
            break;

          case 45:
            _context4.prev = 45;
            _context4.t1 = _context4["catch"](8);
            _didIteratorError4 = true;
            _iteratorError4 = _context4.t1;

          case 49:
            _context4.prev = 49;
            _context4.prev = 50;

            if (!_iteratorNormalCompletion4 && _iterator5.return) {
              _iterator5.return();
            }

          case 52:
            _context4.prev = 52;

            if (!_didIteratorError4) {
              _context4.next = 55;
              break;
            }

            throw _iteratorError4;

          case 55:
            return _context4.finish(52);

          case 56:
            return _context4.finish(49);

          case 57:
            _context4.next = 59;
            return PriceCourse.destroy({
              where: { courseId: courseId }
            });

          case 59:

            res.send({
              response_status: "SUCCESS",
              message: "Deleted successfully"
            });
            _context4.next = 65;
            break;

          case 62:
            _context4.prev = 62;
            _context4.t2 = _context4["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context4.t2.message || "Some error occurred while deleting."
            });

          case 65:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3, undefined, [[0, 62], [8, 45, 49, 57], [16, 28, 32, 40], [33,, 35, 39], [50,, 52, 56]]);
  }));

  return function deleteForm5(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var create = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var data;
    return _regenerator2.default.wrap(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            if (req.body) {
              _context5.next = 4;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Content can not be empty!"
            });
            return _context5.abrupt("return");

          case 4:
            _context5.next = 6;
            return PriceCourse.create(req.body);

          case 6:
            data = _context5.sent;

            if (data) {
              _context5.next = 10;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while creating."
            });
            return _context5.abrupt("return");

          case 10:
            res.status(201).send({
              response_status: "SUCCESS",
              data: data
            });
            _context5.next = 16;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context5.t0.message || "Some error occurred while creating."
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee4, undefined, [[0, 13]]);
  }));

  return function create(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var findAllForm5 = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
    var courseId, courseRes, query, offset, limit, page, where, resultRes, newResultRes;
    return _regenerator2.default.wrap(function _callee5$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            courseId = req.params.courseId;
            _context6.next = 4;
            return Course.findByPk(courseId);

          case 4:
            courseRes = _context6.sent;

            if (courseRes) {
              _context6.next = 8;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context6.abrupt("return");

          case 8:
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
            where = query ? (0, _extends3.default)({}, query, { courseId: courseId }) : { courseId: courseId };
            _context6.next = 14;
            return PriceCourse.findAll({
              limit: limit,
              offset: offset,
              where: where,
              include: include,
              order: [["createdAt", "ASC"], ["id", "ASC"]]
            });

          case 14:
            resultRes = _context6.sent;

            if (resultRes) {
              _context6.next = 18;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context6.abrupt("return");

          case 18:
            newResultRes = [];


            resultRes.forEach(function (element) {
              var price_items = element.price_items;

              var payload = (0, _extends3.default)({}, element.dataValues, { priceItems: price_items });
              delete payload.price_items;
              newResultRes.push(payload);
            });

            console.log("resultRes", resultRes);

            res.status(200).send({
              response_status: "SUCCESS",
              data: newResultRes
            });
            _context6.next = 27;
            break;

          case 24:
            _context6.prev = 24;
            _context6.t0 = _context6["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context6.t0.message || "Some error occurred while finding."
            });

          case 27:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee5, undefined, [[0, 24]]);
  }));

  return function findAllForm5(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var findAll = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
    var query, offset, limit, page, where, resultRes;
    return _regenerator2.default.wrap(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
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
            _context7.next = 7;
            return PriceCourse.findAll({
              limit: limit,
              offset: offset,
              where: where,
              include: include,
              order: [["createdAt", "DESC"], ["id", "DESC"]]
            });

          case 7:
            resultRes = _context7.sent;

            if (resultRes) {
              _context7.next = 11;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context7.abrupt("return");

          case 11:
            res.status(200).send({
              response_status: "SUCCESS",
              data: resultRes
            });
            _context7.next = 17;
            break;

          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context7.t0.message || "Some error occurred while finding."
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee6, undefined, [[0, 14]]);
  }));

  return function findAll(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
    var id, data;
    return _regenerator2.default.wrap(function _callee7$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            _context8.next = 4;
            return PriceCourse.findByPk(id, { include: include });

          case 4:
            data = _context8.sent;

            if (data) {
              _context8.next = 8;
              break;
            }

            res.send({
              response_status: "ERROR",
              message: "Some error occurred while finding."
            });
            return _context8.abrupt("return");

          case 8:

            res.send({
              response_status: "SUCCESS",
              data: data
            });
            _context8.next = 14;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context8.t0.message || "Some error occurred while finding."
            });

          case 14:
          case "end":
            return _context8.stop();
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
    return _regenerator2.default.wrap(function _callee8$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = req.params.id;
            _context9.next = 4;
            return PriceCourse.update(req.body, {
              where: { id: id }
            });

          case 4:
            result = _context9.sent;


            console.log("result", result);

            if (!(result != 1)) {
              _context9.next = 9;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "(ID: " + id + ") was not found."
            });
            return _context9.abrupt("return");

          case 9:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context9.next = 15;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context9.t0.message || "Some error occurred while updating."
            });

          case 15:
          case "end":
            return _context9.stop();
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
    return _regenerator2.default.wrap(function _callee9$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            id = req.params.id;
            _context10.next = 4;
            return PriceCourse.destroy({
              where: { id: id }
            });

          case 4:
            result = _context10.sent;

            if (!(result !== 1)) {
              _context10.next = 8;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: "Log (ID: " + id + ") was not found."
            });
            return _context10.abrupt("return");

          case 8:

            res.send({
              response_status: "SUCCESS",
              message: "Deleted successfully"
            });
            _context10.next = 14;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context10.t0.message || "Some error occurred while deleting."
            });

          case 14:
          case "end":
            return _context10.stop();
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
  createForm5: createForm5,
  findAllForm5: findAllForm5,
  updateForm5: updateForm5,
  deleteForm5: deleteForm5
};
//# sourceMappingURL=priceCourse.controller.js.map