"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var QualificationExam = sequelize.define("qualification_exam", {
    des_en: {
      type: Sequelize.STRING,
      comment: "รายละเอียดการสอนคุณสมบัติ อิ้ง"
    },
    des_th: {
      type: Sequelize.STRING,
      comment: "รายละเอียดการสอนคุณสมบัติ ไทย"
    }
  });
  return QualificationExam;
};
//# sourceMappingURL=qualificationExam.model.js.map