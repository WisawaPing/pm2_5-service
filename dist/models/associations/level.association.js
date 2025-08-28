"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Level.hasMany(db.Facualty);
  db.Facualty.belongsTo(db.Level);

  db.Level.hasMany(db.Major);
  db.Major.belongsTo(db.Level);
};
//# sourceMappingURL=level.association.js.map