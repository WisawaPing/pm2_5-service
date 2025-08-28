"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var AnnualReport = sequelize.define("annual_report", {
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
    download_url: {
      type: Sequelize.TEXT,
      comment: "ลิ้งค์ดาวน์โหลด"
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return AnnualReport;
};
//# sourceMappingURL=annualReport.model.js.map