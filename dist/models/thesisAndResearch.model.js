"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var ThesisAndResearch = sequelize.define("thesis_and_research", {
    name_en: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    download_url: {
      type: Sequelize.TEXT,
      comment: "ลิ้งค์ดาวน์โบหด"
    },
    file_name: {
      type: Sequelize.STRING
    },
    title_th: {
      type: Sequelize.STRING
    },
    title_en: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return ThesisAndResearch;
};
//# sourceMappingURL=thesisAndResearch.model.js.map