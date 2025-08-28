"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Level.hasMany(db.Course);
  db.Course.belongsTo(db.Level);

  db.Facualty.hasMany(db.Course);
  db.Course.belongsTo(db.Facualty);

  db.Major.hasMany(db.Course);
  db.Course.belongsTo(db.Major);
};
//# sourceMappingURL=course.association.js.map