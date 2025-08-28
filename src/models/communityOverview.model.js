export default (sequelize, DataTypes) => {
  const CommunityOverview = sequelize.define(
    "CommunityOverview",
    {
      bannerTitle: { type: DataTypes.STRING, defaultValue: "" },
      bannerText: { type: DataTypes.TEXT, defaultValue: "" },
      bannerImage: { type: DataTypes.TEXT, defaultValue: "" },
      carbonStorage: { type: DataTypes.STRING, defaultValue: "" },
      carbonEmission: { type: DataTypes.STRING, defaultValue: "" },
      lessLink: { type: DataTypes.TEXT, defaultValue: "" },
      webLink: { type: DataTypes.TEXT, defaultValue: "" },
      excelLink: { type: DataTypes.TEXT, defaultValue: "" },
    },
    {
      tableName: "CommunityOverviews",
    }
  );

  return CommunityOverview;
};
