"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Semester = sequelize.define("semester", {
    semester_name: {
      type: Sequelize.STRING
    },
    semester_month: {
      type: Sequelize.STRING
    }
  });
  return Semester;
};
//# sourceMappingURL=semester.model.js.map