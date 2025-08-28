"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var DocumentScholarship = sequelize.define("document_scholarship", {
    name: {
      type: Sequelize.STRING
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return DocumentScholarship;
};
//# sourceMappingURL=documentScholarship.model.js.map