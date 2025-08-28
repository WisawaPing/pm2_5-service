"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var ServiceSystemStudent = sequelize.define("serviceSystemStudent", {
    login_link: {
      type: Sequelize.TEXT
    },
    booking_link: {
      type: Sequelize.TEXT
    },
    e_learning_link: {
      type: Sequelize.TEXT
    },
    library_link: {
      type: Sequelize.TEXT
    }
  });
  return ServiceSystemStudent;
};
//# sourceMappingURL=serviceSystemStudent.model.js.map