module.exports = (sequelize, DataTypes) => {
  const LifeLongLearningBanner = sequelize.define("lifeLongLearningBanner", {
    bannerTitle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
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
