module.exports = (sequelize, DataTypes) => {
  const LifeLongLearningBanner = sequelize.define("lifeLongLearningBanner", {
    bannerText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bannerImage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return LifeLongLearningBanner;
};
