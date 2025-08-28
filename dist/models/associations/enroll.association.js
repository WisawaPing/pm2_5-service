"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Level.hasMany(db.Enroll);
  db.Enroll.belongsTo(db.Level);
};
//# sourceMappingURL=enroll.association.js.map