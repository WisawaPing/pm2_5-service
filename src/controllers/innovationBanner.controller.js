import db from "~/models";

const InnovationBanner = db.InnovationBanner;

const getInnovationBanner = async (req, res) => {
  try {
    const banner = await InnovationBanner.findOne();
    if (!banner) {
      return res.status(200).send({
        response_status: "SUCCESS",
        data: { bannerText: "", bannerImage: "" },
      });
    }
    res.send({
      response_status: "SUCCESS",
      data: banner.dataValues,
    });
  } catch (err) {
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการดึงข้อมูล",
    });
  }
};

const updateInnovationBanner = async (req, res) => {
  try {
    const { bannerText, bannerImage } = req.body;

    let banner = await InnovationBanner.findByPk(1);

    if (!banner) {
      banner = await InnovationBanner.create({ bannerText, bannerImage });
    } else {
      await banner.update({ bannerText, bannerImage });
    }

    res.send({
      response_status: "SUCCESS",
      message: "บันทึกข้อมูลเรียบร้อย",
      data: banner.dataValues,
    });
  } catch (err) {
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
    });
  }
};

export default { getInnovationBanner, updateInnovationBanner };
