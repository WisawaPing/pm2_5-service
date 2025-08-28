import express from "express";
import contactController from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", contactController.getContact);
router.put("/", contactController.updateContact);

export default router;
