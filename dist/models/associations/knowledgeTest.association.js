"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Level.hasMany(db.KnowledgeTest);
  db.KnowledgeTest.belongsTo(db.Level);
};
//# sourceMappingURL=knowledgeTest.association.js.map