"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var KnowledgeTestAndQualificationExam = sequelize.define("knowledgeTestAndQualificationExam", {
    title_th: {
      type: Sequelize.TEXT
    },
    title_en: {
      type: Sequelize.TEXT
    },
    registation_th: {
      type: Sequelize.TEXT
    },
    registation_en: {
      type: Sequelize.TEXT
    },
    pay_method_th: {
      type: Sequelize.TEXT
    },
    pay_method_en: {
      type: Sequelize.TEXT
    },
    day_place_th: {
      type: Sequelize.TEXT
    },
    day_place_en: {
      type: Sequelize.TEXT
    },
    announce_result_th: {
      type: Sequelize.TEXT
    },
    announce_result_en: {
      type: Sequelize.TEXT
    },
    types: {
      type: Sequelize.TEXT
    }
  });
  return KnowledgeTestAndQualificationExam;
};
//# sourceMappingURL=knowledgeTestAndQualificationExam.model.js.map