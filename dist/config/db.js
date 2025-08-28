"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // localhost
// const connectDBlocal = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "gscm_services",
//   dialect: "mysql",
//   timezone: "UTC",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };

// server
var connectDBServer = {
  HOST: "thsv41.hostatom.com",
  USER: "yuzu_gscm",
  PASSWORD: "0U016v#nw",
  DB: "gscm",
  dialect: "mysql",
  timezone: "UTC",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

exports.default = (0, _extends3.default)({}, connectDBServer);
//# sourceMappingURL=db.js.map