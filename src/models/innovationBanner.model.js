export default (sequelize, DataTypes) => {
  const InnovationBanner = sequelize.define("InnovationBanner", {
    bannerText: { type: DataTypes.TEXT },
    bannerImage: { type: DataTypes.TEXT },
  });

  return InnovationBanner;
};
