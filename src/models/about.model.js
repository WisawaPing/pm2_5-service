export default (sequelize, DataTypes) => {
  const About = sequelize.define("About", {
    bannerText: { type: DataTypes.TEXT },
    newsList: { type: DataTypes.JSON },
    timelineImage: { type: DataTypes.TEXT },
  });

  return About;
};
