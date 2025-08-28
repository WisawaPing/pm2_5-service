"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.CourseStructure.hasMany(db.CourseFormat);
  db.CourseFormat.belongsTo(db.CourseStructure);
};
//# sourceMappingURL=courseFormat.association.js.map