"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var CourseStructure = sequelize.define("course_structure", {
    name: {
      type: Sequelize.TEXT,
      comment: "ชื่อหมวดวิชาที่"
    },
    plan_1: {
      type: Sequelize.TEXT
    },
    plan_2: {
      type: Sequelize.TEXT
    },
    plan_3: {
      type: Sequelize.TEXT
    },
    sub1: {
      type: Sequelize.TEXT
    },
    sub2: {
      type: Sequelize.TEXT
    },
    sub3: {
      type: Sequelize.TEXT
    },
    sub4: {
      type: Sequelize.TEXT
    },
    sub5: {
      type: Sequelize.TEXT
    },
    sub6: {
      type: Sequelize.TEXT
    },
    sub7: {
      type: Sequelize.TEXT
    },
    // courseId: {
    //   type: Sequelize.STRING,
    // },
    note: {
      type: Sequelize.TEXT
    }
  });
  return CourseStructure;
};
//# sourceMappingURL=courseStructure.model.js.map