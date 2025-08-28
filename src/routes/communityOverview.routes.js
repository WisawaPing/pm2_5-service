import express from "express";
import auth from "../middleware/auth.js";
import communityController from "../controllers/communityOverview.controller.js";

const router = express.Router();

router.get("/", communityController.getCommunityOverview);
router.put("/", communityController.updateCommunityOverview);

export default router;
