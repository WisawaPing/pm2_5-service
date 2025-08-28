"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var MajorNew = sequelize.define("majorNew", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    note_th: {
      type: Sequelize.STRING
    },
    note_en: {
      type: Sequelize.STRING
    },
    chance_th: {
      type: Sequelize.STRING
    },
    chance_en: {
      type: Sequelize.STRING
    }
  });
  return MajorNew;
};
//# sourceMappingURL=majorNew.model.js.map