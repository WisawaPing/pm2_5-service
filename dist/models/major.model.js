"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Major = sequelize.define("major", {
    name_en: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    job_opportunities: {
      type: Sequelize.TEXT,
      comment: "โอกาสในการประกอบสายอาชีพ"
    },

    job_opportunities_en: {
      type: Sequelize.TEXT
    },

    conditions_for_receiving: {
      type: Sequelize.TEXT,
      comment: "เงื่อนไขในการรับ รับเฉพาะภาคเรียนที่กำหนด"
    },
    courseId: {
      type: Sequelize.STRING
    },

    desc_en: {
      type: Sequelize.TEXT
    },
    desc_th: {
      type: Sequelize.TEXT
    },

    courses_offered_arr: {
      type: Sequelize.JSON
    }
  });
  return Major;
};
//# sourceMappingURL=major.model.js.map