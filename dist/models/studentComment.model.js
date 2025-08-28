"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var StudentComment = sequelize.define("student_comment", {
    comment_desc_en: {
      type: Sequelize.TEXT
    },
    comment_from_en: {
      type: Sequelize.TEXT
    },
    comment_position_en: {
      type: Sequelize.STRING
    },
    comment_desc_th: {
      type: Sequelize.TEXT
    },
    comment_from_th: {
      type: Sequelize.TEXT
    },
    comment_position_th: {
      type: Sequelize.STRING
    },
    image_url: {
      type: Sequelize.TEXT
    },
    generation_th: {
      type: Sequelize.STRING
    },
    generation_en: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    index: {
      type: Sequelize.INTEGER
    }
  });
  return StudentComment;
};
//# sourceMappingURL=studentComment.model.js.map