"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScholarshipType = _models2.default.ScholarshipType,
    Scholarship = _models2.default.Scholarship,
    DocumentScholarshipType = _models2.default.DocumentScholarshipType;

var include = [Scholarship];

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
            return ScholarshipType.create(req.body);

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
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 13;
            _iterator = (0, _getIterator3.default)(req.body.documentScholarships);

          case 15:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 23;
              break;
            }

            documentScholarship = _step.value;

            documentScholarship.scholarshipTypeId = data.id;
            _context.next = 20;
            return DocumentScholarshipType.create(documentScholarship);

          case 20:
            _iteratorNormalCompletion = true;
            _context.next = 15;
            break;

          case 23:
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](13);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 29:
            _context.prev = 29;
            _context.prev = 30;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 32:
            _context.prev = 32;

            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context.finish(32);

          case 36:
            return _context.finish(29);

          case 37:
            _context.next = 39;
            return DocumentScholarshipType.findAll({
              where: { scholarshipTypeId: data.id }
            });

          case 39:
            ann = _context.sent;

            data.dataValues.documentScholarships = [];
            data.dataValues.documentScholarships = ann;

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
    }, _callee, undefined, [[0, 45], [13, 25, 29, 37], [30,, 32, 36]]);
  }));

  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var findAll = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
    var query, offset, limit, page, where, resultRes, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, result;

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
            return ScholarshipType.findAll({
              limit: limit,
              offset: offset,
              where: where,
              include: include,
              order: [["createdAt", "DESC"], ["id", "DESC"]]
            });

          case 7:
            resultRes = _context2.sent;

            if (!resultRes) {
              _context2.next = 37;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 12;
            _iterator2 = (0, _getIterator3.default)(resultRes);

          case 14:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context2.next = 23;
              break;
            }

            item = _step2.value;
            _context2.next = 18;
            return DocumentScholarshipType.findAll({
              where: {
                scholarshipTypeId: item.id
              }
            });

          case 18:
            result = _context2.sent;

            item.dataValues.documentScholarships = result;

          case 20:
            _iteratorNormalCompletion2 = true;
            _context2.next = 14;
            break;

          case 23:
            _context2.next = 29;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](12);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 29:
            _context2.prev = 29;
            _context2.prev = 30;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 32:
            _context2.prev = 32;

            if (!_didIteratorError2) {
              _context2.next = 35;
              break;
            }

            throw _iteratorError2;

          case 35:
            return _context2.finish(32);

          case 36:
            return _context2.finish(29);

          case 37:
            if (resultRes) {
              _context2.next = 40;
              break;
            }

            res.status(200).send({
              response_status: "ERROR",
              message: err.message || "Some error occurred while finding."
            });
            return _context2.abrupt("return");

          case 40:
            res.status(200).send({
              response_status: "SUCCESS",
              data: resultRes
            });
            _context2.next = 46;
            break;

          case 43:
            _context2.prev = 43;
            _context2.t1 = _context2["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context2.t1.message || "Some error occurred while finding."
            });

          case 46:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 43], [12, 25, 29, 37], [30,, 32, 36]]);
  }));

  return function findAll(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var findOne = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
    var id, data, ann;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return ScholarshipType.findByPk(id, { include: include });

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
            _context3.next = 10;
            return DocumentScholarshipType.findAll({
              where: { scholarshipTypeId: id }
            });

          case 10:
            ann = _context3.sent;

            data.dataValues.documentScholarships = [];
            data.dataValues.documentScholarships = ann;

            res.send({
              response_status: "SUCCESS",
              data: data
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

  return function findOne(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var update = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
    var id, result, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, documentScholarship;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return ScholarshipType.update(req.body, {
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
            _context4.next = 11;
            return DocumentScholarshipType.destroy({ where: { scholarshipTypeId: id } });

          case 11:
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context4.prev = 14;
            _iterator3 = (0, _getIterator3.default)(req.body.documentScholarships);

          case 16:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context4.next = 24;
              break;
            }

            documentScholarship = _step3.value;

            documentScholarship.scholarshipTypeId = id;
            _context4.next = 21;
            return DocumentScholarshipType.create(documentScholarship);

          case 21:
            _iteratorNormalCompletion3 = true;
            _context4.next = 16;
            break;

          case 24:
            _context4.next = 30;
            break;

          case 26:
            _context4.prev = 26;
            _context4.t0 = _context4["catch"](14);
            _didIteratorError3 = true;
            _iteratorError3 = _context4.t0;

          case 30:
            _context4.prev = 30;
            _context4.prev = 31;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 33:
            _context4.prev = 33;

            if (!_didIteratorError3) {
              _context4.next = 36;
              break;
            }

            throw _iteratorError3;

          case 36:
            return _context4.finish(33);

          case 37:
            return _context4.finish(30);

          case 38:

            res.send({
              response_status: "SUCCESS",
              message: "Updated successfully"
            });
            _context4.next = 44;
            break;

          case 41:
            _context4.prev = 41;
            _context4.t1 = _context4["catch"](0);

            res.send({
              response_status: "ERROR",
              message: _context4.t1.message || "Some error occurred while updating."
            });

          case 44:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[0, 41], [14, 26, 30, 38], [31,, 33, 37]]);
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
            return ScholarshipType.destroy({
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
//# sourceMappingURL=scholarshipType.controller.js.map