import express from "express";
import auth from "../middleware/auth.js";
import contactController from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", auth, contactController.getContact);
router.put("/", auth, contactController.updateContact);

export default router;
