// server
const connectDBServer = {
  HOST: "thsv41.hostatom.com",
  USER: "yuzu_faofun",
  PASSWORD: "33v_v8q6D",
  DB: "faofun",
  dialect: "mysql",
  timezone: "UTC",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default {
  ...connectDBServer,
};
