// src/controllers/user.controller.js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "~/models";
import hashConfig from "~/config/hash";
import findAllByQuery from "../helpers/findAllByQuery";

const User = db.User;
const include = [];

const createToken = (payload, secret, expiresIn) => {
  return jwt.sign(payload, secret, { expiresIn });
};

// GET /users
const findAll = async (req, res) => {
  try {
    const users = await findAllByQuery(req, User, include);
    res.send({ response_status: "SUCCESS", data: users });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

// GET /users/:id
const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ include, where: { id } });
    if (!user) {
      return res
        .status(404)
        .send({ response_status: "ERROR", message: "ไม่พบผู้ใช้งานนี้" });
    }
    res.send({
      response_status: "SUCCESS",
      data: { id: user.id, username: user.username },
    });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

// POST /users
const create = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({
        response_status: "ERROR",
        message: "Username และ Password ต้องไม่ว่าง",
      });
    }

    const foundUser = await User.findOne({ where: { username } });
    if (foundUser) {
      return res.status(400).send({
        response_status: "ERROR",
        message: "Username นี้ มีผู้ใช้งานแล้ว",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });

    res.send({
      response_status: "SUCCESS",
      data: { id: newUser.id, username: newUser.username },
    });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

// PUT /users/:id
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .send({ response_status: "ERROR", message: `(ID: ${id}) ไม่พบผู้ใช้` });
    }

    const payload = {};
    if (username) payload.username = username;
    if (password) payload.password = bcrypt.hashSync(password, 10);

    await user.update(payload);
    await user.reload(); // ดึงข้อมูลล่าสุด

    res.send({
      response_status: "SUCCESS",
      message: "อัปเดตผู้ใช้เรียบร้อย",
      data: { id: user.id, username: user.username },
    });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

// DELETE /users/:id
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    if (deleted === 1) {
      return res.send({
        response_status: "SUCCESS",
        message: "ลบผู้ใช้เรียบร้อย",
      });
    }
    res
      .status(404)
      .send({ response_status: "ERROR", message: `(ID: ${id}) ไม่พบผู้ใช้` });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

// POST /users/login
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).send({
        response_status: "ERROR",
        message: "กรุณากรอก username และ password",
      });
    }

    const foundUser = await User.findOne({ where: { username } });
    if (!foundUser) {
      return res
        .status(401)
        .send({ response_status: "ERROR", message: "ไม่พบผู้ใช้งานนี้ในระบบ" });
    }

    const match = bcrypt.compareSync(password, foundUser.password);
    if (!match) {
      return res
        .status(401)
        .send({ response_status: "ERROR", message: "Password ไม่ถูกต้อง" });
    }

    const token = createToken(
      { id: foundUser.id, username: foundUser.username },
      hashConfig.jwtSecret,
      "1d"
    );

    res.send({
      response_status: "SUCCESS",
      data: { id: foundUser.id, username: foundUser.username, token },
    });
  } catch (err) {
    res.status(500).send({ response_status: "ERROR", message: err.message });
  }
};

export default {
  create,
  findAll,
  findOne,
  update,
  remove,
  login,
};
