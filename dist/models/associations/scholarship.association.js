"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Scholarship.hasMany(db.ScholarshipType);
  db.ScholarshipType.belongsTo(db.Scholarship);

  db.Level.hasMany(db.Scholarship);
  db.Scholarship.belongsTo(db.Level);
};
//# sourceMappingURL=scholarship.association.js.map