"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var TypeCourse = sequelize.define("type_course", {
    name_en: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    desc_en: {
      type: Sequelize.TEXT
    },
    desc_th: {
      type: Sequelize.TEXT
    },
    courseId: {
      type: Sequelize.STRING
    },
    courses_offered_arr: {
      type: Sequelize.JSON
    }
  });
  return TypeCourse;
};
//# sourceMappingURL=typeCourse.model.js.map