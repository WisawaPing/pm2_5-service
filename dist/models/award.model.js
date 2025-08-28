"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Award = sequelize.define("award", {
    name_th: {
      type: Sequelize.TEXT
    },
    name_en: {
      type: Sequelize.TEXT
    },
    recipient_th: {
      type: Sequelize.TEXT
    },
    recipient_en: {
      type: Sequelize.TEXT
    },
    years_received: {
      type: Sequelize.TEXT
    },
    desc_th: {
      type: Sequelize.TEXT
    },
    desc_en: {
      type: Sequelize.TEXT
    },
    namePic: {
      type: Sequelize.TEXT
    },
    img_url: {
      type: Sequelize.TEXT
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return Award;
};
//# sourceMappingURL=award.model.js.map