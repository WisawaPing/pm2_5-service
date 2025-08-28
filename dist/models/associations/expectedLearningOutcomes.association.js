"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Coursesoffered.hasMany(db.ExpectedLearningOutcomes);
  db.ExpectedLearningOutcomes.belongsTo(db.Coursesoffered);

  db.Major.hasMany(db.ExpectedLearningOutcomes);
  db.ExpectedLearningOutcomes.belongsTo(db.Major);

  db.Course.hasMany(db.ExpectedLearningOutcomes);
  db.ExpectedLearningOutcomes.belongsTo(db.Course);
};
//# sourceMappingURL=expectedLearningOutcomes.association.js.map