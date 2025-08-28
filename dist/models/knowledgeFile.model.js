"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var KnowledgeFile = sequelize.define("knowledgeFile", {
    name: {
      type: Sequelize.TEXT
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return KnowledgeFile;
};
//# sourceMappingURL=knowledgeFile.model.js.map