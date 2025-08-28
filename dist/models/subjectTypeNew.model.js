"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var SubjectTypeNew = sequelize.define("subjectTypeNew", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    description_th: {
      type: Sequelize.STRING
    },
    description_en: {
      type: Sequelize.STRING
    }
  });
  return SubjectTypeNew;
};
//# sourceMappingURL=subjectTypeNew.model.js.map