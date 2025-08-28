"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Facualty.hasMany(db.SuccessfulAlumni);
  db.SuccessfulAlumni.belongsTo(db.Facualty);

  db.Level.hasMany(db.SuccessfulAlumni);
  db.SuccessfulAlumni.belongsTo(db.Level);

  db.Major.hasMany(db.SuccessfulAlumni);
  db.SuccessfulAlumni.belongsTo(db.Major);
};
//# sourceMappingURL=successfulAlumni.association.js.map