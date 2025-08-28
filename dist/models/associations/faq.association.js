"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Level.hasMany(db.FAQ);
  db.FAQ.belongsTo(db.Level);

  db.Facualty.hasMany(db.FAQ);
  db.FAQ.belongsTo(db.Facualty);

  db.Major.hasMany(db.FAQ);
  db.FAQ.belongsTo(db.Major);

  db.Course.hasMany(db.FAQ);
  db.FAQ.belongsTo(db.Course);
};
//# sourceMappingURL=faq.association.js.map