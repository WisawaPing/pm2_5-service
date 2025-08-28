"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  // db.TypeCourse.hasMany(db.SubCoursesOffered);
  // db.SubCoursesOffered.belongsTo(db.TypeCourse);

  db.Major.hasMany(db.SubCoursesOffered);
  db.SubCoursesOffered.belongsTo(db.Major);

  // db.Coursesoffered.hasMany(db.SubCoursesOffered);
  // db.SubCoursesOffered.belongsTo(db.Coursesoffered);

  db.Course.hasMany(db.SubCoursesOffered);
  db.SubCoursesOffered.belongsTo(db.Course);
};
//# sourceMappingURL=subCoursesOffered.association.js.map