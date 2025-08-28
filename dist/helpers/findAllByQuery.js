"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, db) {
    var arrKeyInclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var orderBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "DESC";

    var result, include, where, newResult, _newResult;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = void 0;

            // console.log("arrKeyInclude", arrKeyInclude);

            include = arrKeyInclude;

            if (!((0, _keys2.default)(req.query).length > 0)) {
              _context.next = 20;
              break;
            }

            where = {};

            (0, _keys2.default)(req.query).forEach(function (key) {
              if (key != "offset" && key != "limit") {
                if (req.query[key] != "") {
                  where[key] = req.query[key];
                }
              }
            });
            // console.log(where);
            _context.next = 7;
            return db.findAll({
              // include: arrKeyInclude,
              include: include,
              where: where,
              order: [["createdAt", orderBy], ["id", orderBy]]
            });

          case 7:
            result = _context.sent;

            if (!(result.length > 0)) {
              _context.next = 17;
              break;
            }

            if (!result[0].status) {
              _context.next = 14;
              break;
            }

            newResult = result.filter(function (data) {
              return data.status != "SAVE DRAFT";
            });

            if (!req.query.userId) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", result);

          case 13:
            return _context.abrupt("return", newResult);

          case 14:
            return _context.abrupt("return", result);

          case 17:
            return _context.abrupt("return", false);

          case 18:
            _context.next = 33;
            break;

          case 20:
            _context.next = 22;
            return db.findAll({
              // include: arrKeyInclude,
              include: include,
              order: [["createdAt", orderBy], ["id", orderBy]]
            });

          case 22:
            result = _context.sent;

            if (!(result.length > 0)) {
              _context.next = 32;
              break;
            }

            if (!result[0].status) {
              _context.next = 29;
              break;
            }

            _newResult = result.filter(function (data) {
              return data.status != "SAVE DRAFT";
            });

            if (!req.query.userId) {
              _context.next = 28;
              break;
            }

            return _context.abrupt("return", result);

          case 28:
            return _context.abrupt("return", _newResult);

          case 29:
            return _context.abrupt("return", result);

          case 32:
            return _context.abrupt("return", []);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=findAllByQuery.js.map