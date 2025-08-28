"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Carlendar = sequelize.define("carlendar", {
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    types: {
      type: Sequelize.STRING
    },
    documentFiles: {
      type: Sequelize.STRING
    },
    table_name: {
      type: Sequelize.STRING
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return Carlendar;
};
//# sourceMappingURL=carlendar.model.js.map