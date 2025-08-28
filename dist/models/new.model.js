"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var New = sequelize.define("new", {
    title_en: {
      type: Sequelize.STRING
    },
    short_desc_en: {
      type: Sequelize.TEXT
    },
    full_desc_en: {
      type: Sequelize.TEXT
    },
    title_th: {
      type: Sequelize.STRING
    },
    short_desc_th: {
      type: Sequelize.TEXT
    },
    full_desc_th: {
      type: Sequelize.TEXT
    },
    img_url: {
      type: Sequelize.TEXT
    },
    type: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.TEXT
    },
    keyword_seo_th: {
      type: Sequelize.TEXT
    },
    keyword_seo_en: {
      type: Sequelize.TEXT
    },
    title_seo_th: {
      type: Sequelize.TEXT
    },
    title_seo_en: {
      type: Sequelize.TEXT
    },
    url_seo_th: {
      type: Sequelize.TEXT
    },
    url_seo_en: {
      type: Sequelize.TEXT
    },
    desc_seo_th: {
      type: Sequelize.TEXT
    },
    desc_seo_en: {
      type: Sequelize.TEXT
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return New;
};
//# sourceMappingURL=new.model.js.map