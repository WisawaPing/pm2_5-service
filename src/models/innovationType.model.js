export default (sequelize, DataTypes) => {
  const InnovationType = sequelize.define("InnovationType", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    planImage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    context: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    process: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    results: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    training: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gallery: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    videoLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return InnovationType;
};
