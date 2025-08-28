'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var File = sequelize.define('file', {
    type: {
      type: Sequelize.STRING,
      required: true
    },
    name: {
      type: Sequelize.STRING,
      required: true
    },
    path: {
      type: Sequelize.STRING,
      required: true
    },
    activeFlag: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  });
  return File;
};
//# sourceMappingURL=file.model.js.map