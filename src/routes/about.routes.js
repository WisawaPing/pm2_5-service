import { Router } from "express";
import auth from "../middleware/auth.js";
import controller from "../controllers/about.controller.js";

const router = Router();

router.get("/", auth, controller.getAbout);
router.put("/", auth, controller.updateAbout);

export default router;
