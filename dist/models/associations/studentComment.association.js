"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Level.hasMany(db.StudentComment);
  db.StudentComment.belongsTo(db.Level);

  db.Major.hasMany(db.StudentComment);
  db.StudentComment.belongsTo(db.Major);
};
//# sourceMappingURL=studentComment.association.js.map