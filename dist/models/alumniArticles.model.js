"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var AlumniArticles = sequelize.define("alumni_article", {
    name_en: {
      type: Sequelize.STRING
    },
    name_th: {
      type: Sequelize.STRING
    },
    cover_img_url: {
      type: Sequelize.TEXT
    },
    content_en: {
      type: Sequelize.TEXT
    },
    content_th: {
      type: Sequelize.TEXT
    },
    release_date: {
      type: Sequelize.DATEONLY
    }
  });
  return AlumniArticles;
};
//# sourceMappingURL=alumniArticles.model.js.map