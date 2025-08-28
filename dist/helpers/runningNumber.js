"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pad_with_zeroes = function pad_with_zeroes(number, lenght) {
  var my_string = "" + number;
  while (my_string.length < lenght) {
    my_string = "0" + my_string;
  }

  return my_string;
};

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(Model, RunningNumber, modelName, body) {
    var reqData, runningNumber, currentRunningNumber, newNumberDate, runningDate, runningDateStr, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reqData = body;
            _context.next = 3;
            return RunningNumber.findOne({
              where: { runningDate: new Date(), requestType: modelName }
            });

          case 3:
            runningNumber = _context.sent;
            currentRunningNumber = void 0;

            if (runningNumber) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return RunningNumber.create({
              runningNumber: 1,
              runningDate: new Date(),
              requestType: modelName
            });

          case 8:
            newNumberDate = _context.sent;


            currentRunningNumber = newNumberDate.dataValues.runningNumber;
            _context.next = 13;
            break;

          case 12:
            currentRunningNumber = runningNumber.dataValues.runningNumber;

          case 13:

            // await RunningNumber.update({ runningNumber: currentRunningNumber + 1 }, { where: { runningDate: new Date() } })
            runningDate = new Date();
            runningDateStr = runningDate.getFullYear() + "" + pad_with_zeroes(runningDate.getMonth() + 1, 2) + "" + pad_with_zeroes(runningDate.getDate(), 2) + "" + pad_with_zeroes(currentRunningNumber, 6);

            console.log(runningDateStr);

            reqData.request_no = runningDateStr;

            _context.next = 19;
            return Model.create(reqData);

          case 19:
            data = _context.sent;
            _context.next = 22;
            return RunningNumber.update({ runningNumber: currentRunningNumber + 1 }, { where: { runningDate: new Date(), requestType: modelName } });

          case 22:
            return _context.abrupt("return", data);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=runningNumber.js.map