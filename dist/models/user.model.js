"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sequelize, Sequelize) {
  var User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING(50),
      unique: true
    },
    password: {
      type: Sequelize.TEXT
    },
    full_name: {
      type: Sequelize.STRING(50)
    },
    user_type: {
      type: Sequelize.STRING(),
      defaultValue: "USER"
    },
    email: {
      type: Sequelize.STRING(),
      comment: "email"
    },
    status: {
      type: Sequelize.STRING(30),
      defaultValue: "OFFLINE"
    }
  }, {
    hooks: {
      beforeCreate: function beforeCreate(user, options) {
        {
          user.dataValues.password = user.dataValues.password && user.dataValues.password !== "" ? _bcrypt2.default.hashSync(user.dataValues.password, 10) : "";
        }
      },
      beforeUpdate: function beforeUpdate(user, options) {
        {
          user.dataValues.password = user.dataValues.password && user.dataValues.password !== "" ? _bcrypt2.default.hashSync(user.dataValues.password, 10) : "";
        }
      }
    }
  });
  return User;
};
//# sourceMappingURL=user.model.js.map