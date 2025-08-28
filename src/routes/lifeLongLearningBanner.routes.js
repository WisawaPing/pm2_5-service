import { Router } from "express";
import controller from "~/controllers/lifeLongLearningBanner.controller.js";

const router = Router();

router.get("/", controller.getBanner);
router.post("/", controller.saveBanner);

module.exports = router;
