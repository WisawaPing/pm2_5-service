"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Course.hasMany(db.PriceCourse);
  db.PriceCourse.belongsTo(db.Course);
};
//# sourceMappingURL=priceCourse.association.js.map