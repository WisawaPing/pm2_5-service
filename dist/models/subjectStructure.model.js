"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var SubjectStructure = sequelize.define("subjectStructure", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    note_th: {
      type: Sequelize.STRING
    },
    note_en: {
      type: Sequelize.STRING
    },
    countUnit1: {
      type: Sequelize.STRING
    },
    countUnit2: {
      type: Sequelize.STRING
    },
    countUnit3: {
      type: Sequelize.STRING
    },
    countUnit4: {
      type: Sequelize.STRING
    },
    countUnit5: {
      type: Sequelize.STRING
    },
    countUnit6: {
      type: Sequelize.STRING
    },
    countUnit7: {
      type: Sequelize.STRING
    },
    summary: {
      type: Sequelize.STRING
    }
  });
  return SubjectStructure;
};
//# sourceMappingURL=subjectStructure.model.js.map