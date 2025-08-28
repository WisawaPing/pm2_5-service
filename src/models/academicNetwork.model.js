export default (sequelize, DataTypes) => {
  const AcademicNetwork = sequelize.define("academicNetwork", {
    bannerTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bannerText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bannerImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    introText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // เก็บ networks array เป็น JSON
    networks: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  return AcademicNetwork;
};
