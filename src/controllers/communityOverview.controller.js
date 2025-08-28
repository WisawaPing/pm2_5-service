// src/controllers/communityOverview.controller.js
import db from "../models/index.js";

const CommunityOverview = db.CommunityOverview;

const getCommunityOverview = async (req, res) => {
  try {
    // ดึง record ตัวแรก (ถ้ามี)
    let item = await CommunityOverview.findOne();

    if (!item) {
      return res.status(200).json({
        response_status: "SUCCESS",
        data: {
          id: null,
          bannerTitle: "",
          bannerText: "",
          bannerImage: "",
          carbonStorage: "",
          carbonEmission: "",
          lessLink: "",
          webLink: "",
          excelLink: "",
        },
      });
    }

    res.json({
      response_status: "SUCCESS",
      data: item,
    });
  } catch (error) {
    console.error("Error fetching CommunityOverview:", error);
    res.status(500).json({
      response_status: "ERROR",
      message: "Internal server error",
    });
  }
};

const updateCommunityOverview = async (req, res) => {
  try {
    let item = await CommunityOverview.findOne();

    const payload = {
      bannerTitle: req.body.bannerTitle || "",
      bannerText: req.body.bannerText || "",
      bannerImage: req.body.bannerImage || "",
      carbonStorage: req.body.carbonStorage || "",
      carbonEmission: req.body.carbonEmission || "",
      lessLink: req.body.lessLink || "",
      webLink: req.body.webLink || "",
      excelLink: req.body.excelLink || "",
    };

    if (!item) {
      // ถ้าไม่มี record ให้สร้างใหม่
      item = await CommunityOverview.create(payload);
    } else {
      await item.update(payload);
    }

    res.json({
      response_status: "SUCCESS",
      message: "บันทึกข้อมูลเรียบร้อย",
      data: item,
    });
  } catch (error) {
    console.error("Error updating CommunityOverview:", error);
    res.status(500).json({
      response_status: "ERROR",
      message: "Internal server error",
    });
  }
};

export default { getCommunityOverview, updateCommunityOverview };
