"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var DocumentScholarshipType = sequelize.define("document_scholarshipType", {
    name: {
      type: Sequelize.STRING
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return DocumentScholarshipType;
};
//# sourceMappingURL=documentScholarshipType.model.js.map