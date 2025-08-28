"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Level.hasMany(db.QualificationExam);
  db.QualificationExam.belongsTo(db.Level);
};
//# sourceMappingURL=qualificationExam.association.js.map