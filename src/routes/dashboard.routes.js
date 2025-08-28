import { Router } from "express";
import controller from "../controllers/dashboard.controller.js";
import auth from "../middleware/auth.js";

const router = Router();
router.get("/", auth, controller.getDashboard);
router.put("/", auth, controller.updateDashboard);

export default router;
