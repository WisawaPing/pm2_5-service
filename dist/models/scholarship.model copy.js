"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Scholarship = sequelize.define("scholarship", {
    scholarshipType_en: {
      type: Sequelize.STRING,
      comment: "ประเภททุน ภาคปกติ หรือภาคพิเศษ ภาษาอังกฤษ"
    },
    description_en: {
      type: Sequelize.TEXT,
      comment: "รายละเอียดทุน ภาษาอังกฤษ"
    },
    condition_en: {
      type: Sequelize.TEXT,
      comment: "เงื่อนไขเเละหลักเกณในการรับทุน ภาษาอังกฤษ"
    },
    time_of_funding_en: {
      type: Sequelize.STRING,
      comment: "ระยะเวลาในการให้ทุน ภาษาอังกฤษ"
    },
    how_to_get_funding_en: {
      type: Sequelize.TEXT,
      comment: "วิธีการขอทุน ภาษาอังกฤษ"
    },

    scholarshipType_th: {
      type: Sequelize.STRING,
      comment: "ประเภททุน ภาคปกติ หรือภาคพิเศษ ภาษาไทย"
    },
    description_th: {
      type: Sequelize.TEXT,
      comment: "รายละเอียดทุน ภาษาไทย"
    },
    condition_th: {
      type: Sequelize.TEXT,
      comment: "เงื่อนไขเเละหลักเกณในการรับทุน ภาษาไทย"
    },
    time_of_funding_start: {
      type: Sequelize.DATEONLY,
      comment: "ระยะเวลาในการให้ทุน ภาษาไทย"
    },
    time_of_funding_end: {
      type: Sequelize.DATEONLY,
      comment: "ระยะเวลาในการให้ทุน ภาษาไทย"
    },
    how_to_get_funding_th: {
      type: Sequelize.TEXT,
      comment: "วิธีการขอทุน ภาษาไทย"
    },

    amount_of_capital: {
      type: Sequelize.INTEGER,
      comment: "จำนวนเงินทุน"
    },
    url_download_doc: {
      type: Sequelize.TEXT,
      comment: "ลิงค์ดาวโหลดเอกสารประเภททุน"
    }
  });
  return Scholarship;
};
//# sourceMappingURL=scholarship.model copy.js.map