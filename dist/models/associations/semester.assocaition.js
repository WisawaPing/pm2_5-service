"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Course.hasMany(db.Semester);
  db.Semester.belongsTo(db.Course);
};
//# sourceMappingURL=semester.assocaition.js.map