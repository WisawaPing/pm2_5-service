"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var WelcomePopUp = sequelize.define("welcome_pop_up", {
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
    }
  });
  return WelcomePopUp;
};
//# sourceMappingURL=welcomePopUp.model.js.map