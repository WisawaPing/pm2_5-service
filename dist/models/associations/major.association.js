"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Facualty.hasMany(db.Major);
  db.Major.belongsTo(db.Facualty);
};
//# sourceMappingURL=major.association.js.map