"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var imageEnrollRegister = sequelize.define("image_enroll_register", {
    name: {
      type: Sequelize.STRING
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return imageEnrollRegister;
};
//# sourceMappingURL=imageEnrollRegister.model.js.map