import db from "../models/index.js";
const CommunityType = db.CommunityType;

export default {
  getCommunityTypes: async (req, res) => {
    try {
      const list = await CommunityType.findAll();
      res.json({ response_status: "OK", data: list });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },

  getCommunityTypeById: async (req, res) => {
    const { id } = req.params;
    try {
      const item = await CommunityType.findByPk(id);
      if (!item) {
        return res
          .status(404)
          .json({ response_status: "ERROR", message: "ไม่พบข้อมูล" });
      }
      res.json({ response_status: "OK", data: item });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },

  createCommunityType: async (req, res) => {
    try {
      const newItem = await CommunityType.create(req.body);
      res.json({ response_status: "OK", data: newItem });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },

  updateCommunityType: async (req, res) => {
    const { id } = req.params;
    try {
      const item = await CommunityType.findByPk(id);
      if (!item) {
        return res
          .status(404)
          .json({ response_status: "ERROR", message: "ไม่พบข้อมูล" });
      }
      await item.update(req.body);
      res.json({ response_status: "OK", data: item });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },

  deleteCommunityType: async (req, res) => {
    const { id } = req.params;
    try {
      const item = await CommunityType.findByPk(id);
      if (!item) {
        return res
          .status(404)
          .json({ response_status: "ERROR", message: "ไม่พบข้อมูล" });
      }
      await item.destroy();
      res.json({ response_status: "OK", message: "ลบข้อมูลเรียบร้อย" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ response_status: "ERROR", message: err.message });
    }
  },
};
