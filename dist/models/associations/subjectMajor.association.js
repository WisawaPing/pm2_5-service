"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Major.hasMany(db.SubjectMajor);
  db.SubjectMajor.belongsTo(db.Major);
};
//# sourceMappingURL=subjectMajor.association.js.map