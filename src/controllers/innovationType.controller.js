import db from "~/models";
const InnovationType = db.InnovationType;

const create = async (req, res) => {
  try {
    const created = await InnovationType.create(req.body);
    res.status(201).send({ response_status: "SUCCESS", data: created });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

const findAll = async (_req, res) => {
  try {
    const list = await InnovationType.findAll({ order: [["id", "DESC"]] });
    res.send({ response_status: "SUCCESS", data: list });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

const findOne = async (req, res) => {
  try {
    const item = await InnovationType.findByPk(req.params.id);
    if (!item) {
      return res
        .status(200)
        .send({ response_status: "ERROR", message: "ไม่พบข้อมูล" });
    }
    res.send({ response_status: "SUCCESS", data: item });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const item = await InnovationType.findByPk(req.params.id);
    if (!item) {
      return res
        .status(200)
        .send({ response_status: "ERROR", message: "ไม่พบข้อมูล" });
    }
    await item.update(req.body);
    res.send({
      response_status: "SUCCESS",
      message: "อัปเดตข้อมูลเรียบร้อย",
      data: item,
    });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const item = await InnovationType.findByPk(req.params.id);
    if (!item) {
      return res
        .status(200)
        .send({ response_status: "ERROR", message: "ไม่พบข้อมูล" });
    }
    await item.destroy();
    res.send({ response_status: "SUCCESS", message: "ลบข้อมูลเรียบร้อย" });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

export default { create, findAll, findOne, update, remove };
