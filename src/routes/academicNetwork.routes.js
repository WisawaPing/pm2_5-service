import { Router } from "express";
import controller from "../controllers/academicNetwork.controller.js";

const router = Router();

router.get("/", controller.getAcademicNetwork);
router.post("/", controller.updateAcademicNetwork);

export default router;
