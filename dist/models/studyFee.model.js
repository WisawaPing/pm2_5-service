"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var StudyFee = sequelize.define("studyFee", {
    type: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    pricePerUnit: {
      type: Sequelize.STRING
    },
    allCost: {
      type: Sequelize.STRING
    }
  });
  return StudyFee;
};
//# sourceMappingURL=studyFee.model.js.map