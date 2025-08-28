"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Major.hasMany(db.Coursesoffered);
  db.Coursesoffered.belongsTo(db.Major);

  db.Facualty.hasMany(db.Coursesoffered);
  db.Coursesoffered.belongsTo(db.Facualty);

  db.Level.hasMany(db.Coursesoffered);
  db.Coursesoffered.belongsTo(db.Level);

  db.Course.hasMany(db.Coursesoffered);
  db.Coursesoffered.belongsTo(db.Course);
};
//# sourceMappingURL=coursesOffered.asssociation.js.map