"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.TypeCourse.hasMany(db.SubjectTypeCourse);
  db.SubjectTypeCourse.belongsTo(db.TypeCourse);
};
//# sourceMappingURL=subjectTypeCourse.association.js.map