"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var SubCoursesOffered = sequelize.define("sub_courses_offered", {
    name: {
      type: Sequelize.STRING
    },
    coursesOfferedId: {
      type: Sequelize.STRING
    },
    typeCourseId: {
      type: Sequelize.STRING
    }
  });
  return SubCoursesOffered;
};
//# sourceMappingURL=subCoursesOffered.model.js.map