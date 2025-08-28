"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Enroll = sequelize.define("enroll", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    short_desc_th: {
      type: Sequelize.STRING
    },
    short_desc_en: {
      type: Sequelize.STRING
    },
    semesterCourse: {
      type: Sequelize.STRING
    },
    qualification_th: {
      type: Sequelize.TEXT
    },
    qualification_en: {
      type: Sequelize.TEXT
    },
    seleaction_method_th: {
      type: Sequelize.STRING
    },
    seleaction_method_en: {
      type: Sequelize.STRING
    },
    supposed_budget_th: {
      type: Sequelize.STRING
    },
    supposed_budget_en: {
      type: Sequelize.STRING
    },
    register_schedule_th: {
      type: Sequelize.STRING
    },
    register_schedule_en: {
      type: Sequelize.STRING
    },
    attachFile1: {
      type: Sequelize.TEXT
    },
    attachFile2: {
      type: Sequelize.TEXT
    },
    register_method_th: {
      type: Sequelize.STRING
    },
    register_method_en: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return Enroll;
};
//# sourceMappingURL=enroll.model.js.map