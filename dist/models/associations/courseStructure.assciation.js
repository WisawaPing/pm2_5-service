"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Level.hasMany(db.CourseStructure);
  db.CourseStructure.belongsTo(db.Level);

  db.Facualty.hasMany(db.CourseStructure);
  db.CourseStructure.belongsTo(db.Facualty);

  db.Major.hasMany(db.CourseStructure);
  db.CourseStructure.belongsTo(db.Major);

  db.Course.hasMany(db.CourseStructure);
  db.CourseStructure.belongsTo(db.Course);
};
//# sourceMappingURL=courseStructure.assciation.js.map