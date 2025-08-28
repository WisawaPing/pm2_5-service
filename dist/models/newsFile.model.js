"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var NewsFile = sequelize.define("newsFile", {
    name: {
      type: Sequelize.TEXT
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return NewsFile;
};
//# sourceMappingURL=newsFile.model.js.map