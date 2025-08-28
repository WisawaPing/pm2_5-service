import bcrypt from "bcrypt";

export default (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      username: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          if (user.password && user.password !== "") {
            user.password = bcrypt.hashSync(user.password, 10);
          }
        },
        beforeUpdate: (user) => {
          if (user.password && user.password !== "") {
            user.password = bcrypt.hashSync(user.password, 10);
          }
        },
      },
    }
  );

  return User;
};
