"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var GroupInformation = sequelize.define("groupInformation", {
    title_th: {
      type: Sequelize.TEXT
    },
    title_en: {
      type: Sequelize.TEXT
    },
    desc_th: {
      type: Sequelize.TEXT
    },
    desc_en: {
      type: Sequelize.TEXT
    },
    teacher_th: {
      type: Sequelize.TEXT
    },
    teacher_en: {
      type: Sequelize.TEXT
    },
    position_th: {
      type: Sequelize.TEXT
    },
    position_en: {
      type: Sequelize.TEXT
    },
    history_th: {
      type: Sequelize.TEXT
    },
    history_en: {
      type: Sequelize.TEXT
    },
    philosophy_th: {
      type: Sequelize.TEXT
    },
    philosophy_en: {
      type: Sequelize.TEXT
    },
    determination_th: {
      type: Sequelize.TEXT
    },
    determination_en: {
      type: Sequelize.TEXT
    },
    vision_th: {
      type: Sequelize.TEXT
    },
    vision_en: {
      type: Sequelize.TEXT
    },
    mission_th: {
      type: Sequelize.TEXT
    },
    mission_en: {
      type: Sequelize.TEXT
    },
    sharedValues_th: {
      type: Sequelize.TEXT
    },
    sharedValues_en: {
      type: Sequelize.TEXT
    },
    graduated_amount: {
      type: Sequelize.INTEGER
    },
    master_amount: {
      type: Sequelize.INTEGER
    },
    doctor_amount: {
      type: Sequelize.INTEGER
    },
    imgUrl: {
      type: Sequelize.TEXT
    },
    namePic: {
      type: Sequelize.TEXT
    },
    videoUrl: {
      type: Sequelize.TEXT
    },
    nameVideo: {
      type: Sequelize.TEXT
    }
  });
  return GroupInformation;
};
//# sourceMappingURL=groupInformation.model.js.map