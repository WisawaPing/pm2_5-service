"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var NewsDocumentFile = sequelize.define("newsDocumentFile", {
    name: {
      type: Sequelize.TEXT
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return NewsDocumentFile;
};
//# sourceMappingURL=newsDocumentFile.model.js.map