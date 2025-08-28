"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var PriceCourse = sequelize.define("price_course", {
    forCourse: {
      type: Sequelize.STRING
    }
  });
  return PriceCourse;
};
//# sourceMappingURL=priceCourse.model.js.map