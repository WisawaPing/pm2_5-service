"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var CourseFormat = sequelize.define("course_format", {
    name: {
      type: Sequelize.STRING
    },

    description: {
      type: Sequelize.TEXT
    },

    // expected_learning_outcomes: {
    //   type: Sequelize.TEXT,
    //   comment: "ผลการเรียนรู้ที่คาดหวัง",
    // },
    course_and_explanation_1: {
      type: Sequelize.TEXT,
      comment: "หมวดวิชาและคำอธิบาย 1"
    },
    course_and_explanation_2: {
      type: Sequelize.TEXT,
      comment: "หมวดวิชาและคำอธิบาย 2"
    },
    course_and_explanation_3: {
      type: Sequelize.TEXT,
      comment: "หมวดวิชาและคำอธิบาย 3"
    },
    course_and_explanation_4: {
      type: Sequelize.TEXT,
      comment: "หมวดวิชาและคำอธิบาย 4"
    },
    course_and_explanation_5: {
      type: Sequelize.TEXT,
      comment: "หมวดวิชาและคำอธิบาย 5"
    },
    course_and_explanation_6: {
      type: Sequelize.TEXT,
      comment: "หมวดวิชาและคำอธิบาย 6"
    }
  });
  return CourseFormat;
};
//# sourceMappingURL=courseFormat.model.js.map