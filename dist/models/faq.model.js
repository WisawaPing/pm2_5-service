"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var FAQ = sequelize.define("faq", {
    question_th: {
      type: Sequelize.TEXT,
      comment: "คำถาม "
    },
    question_en: {
      type: Sequelize.TEXT,
      comment: "คำถาม "
    },
    answer_th: {
      type: Sequelize.TEXT
    },
    answer_en: {
      type: Sequelize.TEXT
    },
    detailed_instructions: {
      type: Sequelize.TEXT,
      comment: "รายละเอียดคำแนะนำ "
    }
  });
  return FAQ;
};
//# sourceMappingURL=faq.model.js.map