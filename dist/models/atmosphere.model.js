"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Atmosphere = sequelize.define("atmosphere", {
    fileRecords: {
      type: Sequelize.JSON
    },
    pathPic: {
      type: Sequelize.JSON
    },
    courseId: {
      type: Sequelize.STRING
    }
  });
  return Atmosphere;
};
//# sourceMappingURL=atmosphere.model.js.map