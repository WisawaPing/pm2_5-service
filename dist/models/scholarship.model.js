"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Scholarship = sequelize.define("scholarship", {
    title_th: {
      type: Sequelize.STRING
    },
    title_en: {
      type: Sequelize.STRING
    },
    short_desc_th: {
      type: Sequelize.STRING
    },
    short_desc_en: {
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
    },

    seperate_type: {
      type: Sequelize.STRING
    },

    typeCourse: {
      type: Sequelize.STRING
    },

    status: {
      type: Sequelize.STRING
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return Scholarship;
};
//# sourceMappingURL=scholarship.model.js.map