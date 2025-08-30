import db from "../models/index.js";

const Contact = db.Contact;

const getContact = async (req, res) => {
  try {
    let contact = await Contact.findOne();

    if (!contact) {
      return res.status(200).send({
        response_status: "SUCCESS",
        data: {
          projectName: "",
          department: "",
          address: "",
          phone: "",
          email: "",
          facebook: "",
          twitter: "",
          line: "",
          tiktok: "",
          instagram: "",
          website: "",
        },
      });
    }

    res.send({
      response_status: "SUCCESS",
      data: contact.dataValues,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการดึงข้อมูล",
    });
  }
};

const updateContact = async (req, res) => {
  try {
    const {
      projectName,
      department,
      address,
      phone,
      email,
      facebook,
      twitter,
      line,
      tiktok,
      instagram,
      website,
    } = req.body;

    let contact = await Contact.findByPk(1);

    if (!contact) {
      contact = await Contact.create({
        projectName,
        department,
        address,
        phone,
        email,
        facebook,
        twitter,
        line,
        tiktok,
        instagram,
        website,
      });
    } else {
      await contact.update({
        projectName,
        department,
        address,
        phone,
        email,
        facebook,
        twitter,
        line,
        tiktok,
        instagram,
        website,
      });
    }

    res.send({
      response_status: "SUCCESS",
      message: "บันทึกข้อมูลเรียบร้อย",
      data: contact.dataValues,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      response_status: "ERROR",
      message: err.message || "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
    });
  }
};

export default { getContact, updateContact };
