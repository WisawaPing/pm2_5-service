export default (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    name: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING }, // URL ของภาพหลักสูตร
    description: { type: DataTypes.TEXT },
    duration: { type: DataTypes.STRING },
    lessons: { type: DataTypes.JSON, defaultValue: [] }, // array ของบทเรียนและเนื้อหา
    evaluation: { type: DataTypes.TEXT },
    downloadLink: { type: DataTypes.STRING },
  });

  return Course;
};
