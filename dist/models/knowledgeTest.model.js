"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var knowledgeTest = sequelize.define("knowledge_test", {
    des_en: {
      type: Sequelize.STRING,
      comment: "รายละเอียดการสอนประเมิณความรู้ อิ้ง"
    },
    des_th: {
      type: Sequelize.STRING,
      comment: "รายละเอียดการสอนประเมิณความรู้ ไทย"
    }
  });
  return knowledgeTest;
};
//# sourceMappingURL=knowledgeTest.model.js.map