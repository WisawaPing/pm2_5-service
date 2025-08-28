"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Identity = sequelize.define("identity", {
    name_en: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    cover_img_url: {
      type: Sequelize.TEXT
    },
    file_url: {
      type: Sequelize.TEXT
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return Identity;
};
//# sourceMappingURL=identity.model.js.map