"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var AnualReportFile = sequelize.define("anualReportFile", {
    name: {
      type: Sequelize.TEXT
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return AnualReportFile;
};
//# sourceMappingURL=anualReportFile.model.js.map