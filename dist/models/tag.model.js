"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Tag = sequelize.define("tag", {
    name: {
      type: Sequelize.STRING
    }
  });
  return Tag;
};
//# sourceMappingURL=tag.model.js.map