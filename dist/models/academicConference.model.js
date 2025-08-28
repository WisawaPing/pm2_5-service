"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var AcademicConference = sequelize.define("academic_conference", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    submission_details_en: {
      type: Sequelize.TEXT
    },
    submission_details_th: {
      type: Sequelize.TEXT
    },
    type_th: {
      type: Sequelize.STRING
    },
    type_en: {
      type: Sequelize.STRING
    },
    article_link: {
      type: Sequelize.TEXT
    }
  });
  return AcademicConference;
};
//# sourceMappingURL=academicConference.model.js.map