"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var DocumentAcademicJournal = sequelize.define("document_academicJournal", {
    name: {
      type: Sequelize.STRING
    },
    path: {
      type: Sequelize.TEXT
    }
  });
  return DocumentAcademicJournal;
};
//# sourceMappingURL=documentAcademicJournal.model.js.map