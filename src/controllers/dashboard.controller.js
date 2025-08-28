import db from "~/models";

const Dashboard = db.Dashboard;

const getDashboard = async (req, res) => {
  try {
    const dashboard = await Dashboard.findOne();
    if (!dashboard) {
      return res.status(200).send({
        response_status: "SUCCESS",
        data: {
          bannerText: "",
          mapCards: [{}, {}, {}, {}],
          newsList: [],
        },
      });
    }
    res.send({
      response_status: "SUCCESS",
      data: dashboard.dataValues,
    });
  } catch (err) {
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการดึงข้อมูล",
    });
  }
};

const updateDashboard = async (req, res) => {
  try {
    const { bannerText, mapCards, newsList } = req.body;

    let dashboard = await Dashboard.findByPk(1);

    if (!dashboard) {
      // สร้าง record ใหม่
      dashboard = await Dashboard.create({
        bannerText: bannerText || "",
        mapCards: mapCards || [{}, {}, {}, {}],
        newsList: newsList || [],
      });
    } else {
      // Merge เฉพาะ field ที่ส่งมา
      const updatedData = {
        bannerText:
          bannerText !== undefined ? bannerText : dashboard.bannerText,
        mapCards: mapCards !== undefined ? mapCards : dashboard.mapCards,
        newsList: newsList !== undefined ? newsList : dashboard.newsList,
      };
      await dashboard.update(updatedData);
    }

    res.send({
      response_status: "SUCCESS",
      message: "บันทึกข้อมูลเรียบร้อย",
      data: dashboard.dataValues,
    });
  } catch (err) {
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
    });
  }
};

export default {
  getDashboard,
  updateDashboard,
};
