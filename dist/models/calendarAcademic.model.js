"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var CalendarAcademic = sequelize.define("calendarAcademic", {
    name: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    name_en: {
      type: Sequelize.STRING
    },
    desc_th: {
      type: Sequelize.STRING
    },
    desc_en: {
      type: Sequelize.STRING
    },
    types: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.STRING
    },
    timed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    start: {
      type: Sequelize.DATEONLY
    },
    end: {
      type: Sequelize.DATEONLY
    },
    timeStart: {
      type: Sequelize.STRING
    },
    timeEnd: {
      type: Sequelize.STRING
    }
  });
  return CalendarAcademic;
};
//# sourceMappingURL=calendarAcademic.model.js.map