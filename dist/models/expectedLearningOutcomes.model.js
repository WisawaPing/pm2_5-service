"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var ExpectedLearningOutcomes = sequelize.define("expected_learning_outcome", {
    description_th: {
      type: Sequelize.TEXT
    },
    description_en: {
      type: Sequelize.TEXT
    }
  });
  return ExpectedLearningOutcomes;
};
//# sourceMappingURL=expectedLearningOutcomes.model.js.map