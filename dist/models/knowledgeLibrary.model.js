"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var KnowledgeLibrary = sequelize.define("knowledge_library", {
    name_en: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    attachFile1: {
      type: Sequelize.TEXT
    },
    fileName: {
      type: Sequelize.TEXT
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return KnowledgeLibrary;
};
//# sourceMappingURL=knowledgeLibrary.model.js.map