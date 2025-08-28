"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Review = sequelize.define("review", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    current_job_th: {
      type: Sequelize.STRING
    },
    current_job_en: {
      type: Sequelize.STRING
    },
    desc_th: {
      type: Sequelize.TEXT
    },
    desc_en: {
      type: Sequelize.TEXT
    },

    img_url: {
      type: Sequelize.TEXT
    },
    date: {
      type: Sequelize.STRING
    }
  });
  return Review;
};
//# sourceMappingURL=review.model.js.map