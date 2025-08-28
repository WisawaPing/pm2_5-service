import dbConfig from "../config/db.js";
import Sequelize from "sequelize";

import userModel from "./user.model.js";
import dashboardModel from "./dashboard.model.js";
import aboutModel from "./about.model.js";
import innovationBannerModel from "./innovationBanner.model.js";
import innovationTypeModel from "./innovationType.model.js";
import communityOverviewModel from "./communityOverview.model.js";
import communityTypeModel from "./communityType.model.js";

import courseModel from "./course.model.js";
import contactModel from "./contact.model.js";

// สร้าง Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Object สำหรับเก็บทุกอย่าง
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// สร้าง model
db.User = userModel(sequelize, Sequelize);
db.Dashboard = dashboardModel(sequelize, Sequelize);
db.About = aboutModel(sequelize, Sequelize);
db.InnovationBanner = innovationBannerModel(sequelize, Sequelize);
db.InnovationType = innovationTypeModel(sequelize, Sequelize);
db.CommunityOverview = communityOverviewModel(sequelize, Sequelize);
db.CommunityType = communityTypeModel(sequelize, Sequelize);

db.Course = courseModel(sequelize, Sequelize);
db.Contact = contactModel(sequelize, Sequelize);

export default db;
