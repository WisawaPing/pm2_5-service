"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var ScholarshipType = sequelize.define("scholarship_type", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    condition_th: {
      type: Sequelize.STRING
    },
    condition_en: {
      type: Sequelize.STRING
    },
    amount_of_capital_th: {
      type: Sequelize.STRING
    },
    amount_of_capital_en: {
      type: Sequelize.STRING
    },
    time_of_funding_th: {
      type: Sequelize.STRING
    },
    time_of_funding_en: {
      type: Sequelize.STRING
    },
    how_to_get_funding_th: {
      type: Sequelize.STRING
    },
    how_to_get_funding_en: {
      type: Sequelize.STRING
    },
    attachFile1: {
      type: Sequelize.TEXT
    }
  });
  return ScholarshipType;
};
//# sourceMappingURL=scholarshipType.model.js.map