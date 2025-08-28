"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var StudyDayTime = sequelize.define("study_day_time", {
    day: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    }
  });
  return StudyDayTime;
};
//# sourceMappingURL=studyDayTime.model.js.map