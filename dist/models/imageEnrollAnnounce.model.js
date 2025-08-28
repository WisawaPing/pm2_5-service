"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var ImageEnrollAnnounce = sequelize.define("image_enroll_announce", {
    name: {
      type: Sequelize.STRING
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return ImageEnrollAnnounce;
};
//# sourceMappingURL=imageEnrollAnnounce.model.js.map