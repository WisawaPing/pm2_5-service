"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var StudentWork = sequelize.define("student_work", {
    name_en: {
      type: Sequelize.STRING,
      comment: "ชื่อผลงาน อิ้ง"
    },
    name_th: {
      type: Sequelize.STRING,
      comment: "ชื่อผลงาน ไทย"
    },
    image_url_en: {
      type: Sequelize.TEXT,
      comment: "ลิ้งค์ภาพผลงงาน อิ้ง"
    },
    creator_en: {
      type: Sequelize.STRING,
      comment: "ชื่อผู้สร้างผลงงาน อิ้ง"
    },
    creator_th: {
      type: Sequelize.STRING,
      comment: "ชื่อผู้สร้างผลงงาน ไทย"
    },
    release_date: {
      type: Sequelize.DATEONLY,
      comment: "วันที่เผยเเพร่ ไทย"
    },
    subject_en: {
      type: Sequelize.STRING,
      comment: "ชื่อรายวิชา อิ้ง"
    },
    subject_th: {
      type: Sequelize.STRING,
      comment: "ชื่อรายวิชา ไทย"
    },
    teacher_en: {
      type: Sequelize.STRING,
      comment: "ชื่ออาจารย์ อิ้ง"
    },
    teacher_th: {
      type: Sequelize.STRING,
      comment: "ชื่ออาจารย์ ไทย"
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return StudentWork;
};
//# sourceMappingURL=studentWork.model.js.map