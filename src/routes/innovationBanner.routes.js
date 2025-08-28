import { Router } from "express";
import auth from "../middleware/auth.js";
import controller from "../controllers/innovationBanner.controller.js";

const router = Router();

router.get("/", auth, controller.getInnovationBanner);
router.put("/", auth, controller.updateInnovationBanner);

export default router;
