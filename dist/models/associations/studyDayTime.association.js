"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (db) {
  db.Course.hasMany(db.StudyDayTime);
  db.StudyDayTime.belongsTo(db.Course);
};
//# sourceMappingURL=studyDayTime.association.js.map