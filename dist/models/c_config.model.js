"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var C_config = sequelize.define("c_config", {
    c_name: {
      type: Sequelize.STRING
    },
    c_Address: {
      type: Sequelize.TEXT
    },
    c_phone: {
      type: Sequelize.TEXT
    },
    c_fax: {
      type: Sequelize.STRING(50)
    },
    c_email: {
      type: Sequelize.STRING(50),
      isEmail: true
    },
    c_img_url: {
      type: Sequelize.TEXT
    },
    graduated_amount: {
      type: Sequelize.INTEGER
    },
    master_amount: {
      type: Sequelize.INTEGER,
      isEmail: true
    },
    doctor_amount: {
      type: Sequelize.INTEGER
    },
    business_hours: {
      type: Sequelize.TEXT,
      comment: "วันเวลาทำการ"
    },
    facebook: {
      type: Sequelize.TEXT
    },
    youtube: {
      type: Sequelize.TEXT
    },
    linkedin: {
      type: Sequelize.TEXT
    },
    instagram: {
      type: Sequelize.TEXT
    },
    twitter: {
      type: Sequelize.TEXT
    },
    tiktok: {
      type: Sequelize.TEXT
    },
    line: {
      type: Sequelize.TEXT
    },
    travelByCar_th: {
      type: Sequelize.TEXT
    },
    travelByCar_en: {
      type: Sequelize.TEXT
    },
    travelByBus_th: {
      type: Sequelize.TEXT
    },
    travelByBus_en: {
      type: Sequelize.TEXT
    },
    travelByBoat_th: {
      type: Sequelize.TEXT
    },
    travelByBoat_en: {
      type: Sequelize.TEXT
    },
    googleMapLink: {
      type: Sequelize.TEXT
    }
  });
  return C_config;
};
//# sourceMappingURL=c_config.model.js.map