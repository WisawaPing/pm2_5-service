"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var SubjectMajor = sequelize.define("subject_major", {
    name: {
      type: Sequelize.STRING
    }
  });
  return SubjectMajor;
};
//# sourceMappingURL=subjectMajor.model.js.map