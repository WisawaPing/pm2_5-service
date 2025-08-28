"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Facualty = sequelize.define("facualty", {
    name_en: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    }
  });
  return Facualty;
};
//# sourceMappingURL=facualty.model.js.map