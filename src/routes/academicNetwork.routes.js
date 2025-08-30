import { Router } from "express";
import auth from "../middleware/auth.js";
import controller from "../controllers/academicNetwork.controller.js";

const router = Router();

router.get("/", auth, controller.getAcademicNetwork);
router.post("/", auth, controller.updateAcademicNetwork);

export default router;
