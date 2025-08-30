export default (sequelize, DataTypes) => {
  const InnovationBanner = sequelize.define("InnovationBanner", {
    bannerTitle: { type: DataTypes.TEXT },
    bannerText: { type: DataTypes.TEXT },
    bannerImage: { type: DataTypes.TEXT },
  });

  return InnovationBanner;
};
