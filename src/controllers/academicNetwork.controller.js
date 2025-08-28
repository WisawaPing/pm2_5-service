import db from "~/models";

const AcademicNetwork = db.AcademicNetwork;

// ✅ ดึงข้อมูล Academic Network
const getAcademicNetwork = async (req, res) => {
  try {
    const network = await AcademicNetwork.findOne();

    if (!network) {
      return res.status(200).send({
        response_status: "SUCCESS",
        data: {
          bannerTitle: "",
          bannerText: "",
          bannerImage: "",
          introText: "",
          networks: [],
        },
      });
    }

    let data = network.dataValues;

    // ป้องกันกรณี networks เป็น string
    if (typeof data.networks === "string") {
      try {
        data.networks = JSON.parse(data.networks);
      } catch (e) {
        // ✅ เปลี่ยนจาก catch {} → catch (e) {}
        data.networks = [];
      }
    }

    res.send({
      response_status: "SUCCESS",
      data,
    });
  } catch (err) {
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการดึงข้อมูล Academic Network",
    });
  }
};

// ✅ อัปเดตหรือสร้าง Academic Network
const updateAcademicNetwork = async (req, res) => {
  try {
    const { bannerTitle, bannerText, bannerImage, introText, networks } =
      req.body;

    let network = await AcademicNetwork.findOne();

    const networksValue = Array.isArray(networks)
      ? networks
      : (() => {
          try {
            return JSON.parse(networks || "[]");
          } catch (e) {
            // ✅ เพิ่ม (e) เข้าไป
            return [];
          }
        })();

    if (!network) {
      network = await AcademicNetwork.create({
        bannerTitle,
        bannerText,
        bannerImage,
        introText,
        networks: networksValue,
      });
    } else {
      await network.update({
        bannerTitle,
        bannerText,
        bannerImage,
        introText,
        networks: networksValue,
      });
    }

    res.send({
      response_status: "SUCCESS",
      message: "บันทึกข้อมูล Academic Network เรียบร้อย",
      data: network.dataValues,
    });
  } catch (err) {
    res.status(500).send({
      response_status: "ERROR",
      message:
        err.message || "เกิดข้อผิดพลาดในการบันทึกข้อมูล Academic Network",
    });
  }
};

export default { getAcademicNetwork, updateAcademicNetwork };
