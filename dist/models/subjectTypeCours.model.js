"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var SubjectTypeCourse = sequelize.define("subject_type_course", {
    name: {
      type: Sequelize.STRING
    }
  });
  return SubjectTypeCourse;
};
//# sourceMappingURL=subjectTypeCours.model.js.map