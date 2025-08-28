"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Banner = sequelize.define("banner", {
    title_en: {
      type: Sequelize.STRING
    },
    desc_en: {
      type: Sequelize.TEXT
    },
    title_th: {
      type: Sequelize.STRING
    },
    desc_th: {
      type: Sequelize.TEXT
    },
    img_url: {
      type: Sequelize.TEXT
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return Banner;
};
//# sourceMappingURL=banner.model.js.map