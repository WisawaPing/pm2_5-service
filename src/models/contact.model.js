export default (sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    line: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    tiktok: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
  });

  return Contact;
};
