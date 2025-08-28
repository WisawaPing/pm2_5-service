"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var VideoLinkStudent = sequelize.define("videoLinkStudent", {
    name_youtube: {
      type: Sequelize.TEXT
    },
    link_youtube: {
      type: Sequelize.TEXT
    }
  });
  return VideoLinkStudent;
};
//# sourceMappingURL=videoLinkStudent.model.js.map