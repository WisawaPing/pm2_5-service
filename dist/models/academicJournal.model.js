"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var AcademicJournal = sequelize.define("academic_journal", {
    name_en: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    cover_img_url: {
      type: Sequelize.TEXT
    },
    content_th: {
      type: Sequelize.TEXT
    },
    content_en: {
      type: Sequelize.TEXT
    },
    release_date: {
      type: Sequelize.DATEONLY
    },
    publisher_th: {
      type: Sequelize.STRING,
      comment: "ผู้เผยเเพร่ : NIDA"
    },
    publisher_en: {
      type: Sequelize.STRING,
      comment: "ผู้เผยเเพร่ : NIDA"
    },
    download_url: {
      type: Sequelize.TEXT,
      comment: "ลิ้งค์ดาวน์โบหด"
    },
    type_th: {
      type: Sequelize.STRING
    },
    type_en: {
      type: Sequelize.STRING
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return AcademicJournal;
};
//# sourceMappingURL=academicJournal.model.js.map