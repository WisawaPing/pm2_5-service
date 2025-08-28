export default (sequelize, DataTypes) => {
  const CommunityType = sequelize.define("CommunityType", {
    type: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    carbonStorage: { type: DataTypes.STRING },
    carbonReduction: { type: DataTypes.STRING },
    context: { type: DataTypes.TEXT },
    workflowImage: { type: DataTypes.TEXT },
    activityImages: { type: DataTypes.JSON, defaultValue: [] },
  });

  return CommunityType;
};
