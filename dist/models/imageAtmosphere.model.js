"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var ImageAtmosphere = sequelize.define("image_atmosphere", {
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
  return ImageAtmosphere;
};
//# sourceMappingURL=imageAtmosphere.model.js.map