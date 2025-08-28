"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Tag.hasMany(db.Article);
  db.Article.belongsTo(db.Tag);
};
//# sourceMappingURL=article.association.js.map