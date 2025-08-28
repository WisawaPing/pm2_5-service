"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.PriceCourse.hasMany(db.PriceItem);
  db.PriceItem.belongsTo(db.PriceCourse);

  db.TypeCourse.hasMany(db.PriceItem);
  db.PriceItem.belongsTo(db.TypeCourse);
};
//# sourceMappingURL=priceItems.association.js.map