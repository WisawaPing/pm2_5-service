import db from "~/models";

const About = db.About;

const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    if (!about) {
      return res.status(200).send({
        response_status: "SUCCESS",
        data: {
          bannerText: "",
          newsList: [],
          timelineImage: "",
        },
      });
    }

    // แปลงค่า string ที่อาจถูกเก็บใน DB เป็น JSON (กรณีของเก่า)
    let data = about.dataValues;
    try {
      data.newsList = Array.isArray(data.newsList)
        ? data.newsList
        : JSON.parse(data.newsList || "[]");
    } catch (e) {
      data.newsList = [];
    }

    res.send({
      response_status: "SUCCESS",
      data,
    });
  } catch (err) {
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการดึงข้อมูล",
    });
  }
};

const updateAbout = async (req, res) => {
  try {
    const { bannerText, newsList, timelineImage } = req.body;

    let about = await About.findByPk(1);

    const newsListValue = Array.isArray(newsList)
      ? newsList
      : JSON.parse(newsList || "[]");

    if (!about) {
      about = await About.create({
        bannerText,
        newsList: newsListValue,
        timelineImage,
      });
    } else {
      await about.update({
        bannerText,
        newsList: newsListValue,
        timelineImage,
      });
    }

    res.send({
      response_status: "SUCCESS",
      message: "บันทึกข้อมูลเรียบร้อย",
      data: about.dataValues,
    });
  } catch (err) {
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
    });
  }
};

export default { getAbout, updateAbout };
