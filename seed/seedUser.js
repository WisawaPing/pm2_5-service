import db from "../src/models/index.js";

const User = db.User;

const users = [{ username: "admin", password: "P@ssw0rd" }];

const seed = async () => {
  try {
    await db.sequelize.sync({ force: false });

    for (const u of users) {
      const [user, created] = await User.findOrCreate({
        where: { username: u.username },
        defaults: u, // hook ของ model จะ hash ให้
      });

      if (created) {
        console.log(`✔ User ${u.username} created`);
      } else {
        console.log(`⚠ User ${u.username} already exists`);
      }
    }

    console.log("✅ Seeding finished");
    process.exit(0);
  } catch (err) {
    console.error(`❌ ${err.message}`);
    process.exit(1);
  }
};

seed();
