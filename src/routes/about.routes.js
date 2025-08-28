import { Router } from "express";
import auth from "../middleware/auth.js";
import controller from "../controllers/about.controller.js";

const router = Router();

router.get("/", controller.getAbout);
router.put("/", controller.updateAbout);

export default router;
