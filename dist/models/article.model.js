"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var Article = sequelize.define("article", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    image: {
      type: Sequelize.TEXT
    }
  });
  return Article;
};
//# sourceMappingURL=article.model.js.map