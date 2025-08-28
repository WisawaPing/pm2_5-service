"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Course.hasMany(db.Review);
  db.Review.belongsTo(db.Course);
};
//# sourceMappingURL=review.association.js.map