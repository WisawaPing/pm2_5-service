export default (sequelize, DataTypes) => {
  const Dashboard = sequelize.define("Dashboard", {
    bannerText: { type: DataTypes.TEXT },
    mapCards: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    newsList: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
  });

  return Dashboard;
};
