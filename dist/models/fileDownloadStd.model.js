"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var FileDownloadStd = sequelize.define("fileDownloadStd", {
    title: {
      type: Sequelize.STRING
    },
    download: {
      type: Sequelize.TEXT
    }
  });
  return FileDownloadStd;
};
//# sourceMappingURL=fileDownloadStd.model.js.map