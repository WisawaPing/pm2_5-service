"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var FileAward = sequelize.define("fileAward", {
    title: {
      type: Sequelize.STRING
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return FileAward;
};
//# sourceMappingURL=fileAward.model.js.map