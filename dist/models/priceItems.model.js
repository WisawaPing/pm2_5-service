"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, Sequelize) {
  var PriceItem = sequelize.define("price_item", {
    termType: {
      type: Sequelize.STRING
    },
    // typeCourseId: {
    //   type: Sequelize.INTEGER,
    // },
    pricePerUnit: {
      type: Sequelize.INTEGER
    },
    summaryPrice: {
      type: Sequelize.INTEGER
    }
  });
  return PriceItem;
};
//# sourceMappingURL=priceItems.model.js.map