"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var DownloadFilesStudent = sequelize.define("downloadFilesStudent", {
    name_th: {
      type: Sequelize.TEXT
    },
    name_en: {
      type: Sequelize.TEXT
    },
    attachFile1: {
      type: Sequelize.TEXT
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return DownloadFilesStudent;
};
//# sourceMappingURL=downloadFilesStudent.model.js.map