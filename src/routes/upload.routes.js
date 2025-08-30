import express from "express";
import { uploadFile } from "../controllers/upload.controller.js";

const router = express.Router();

// POST /api/upload
router.post("/", uploadFile);

export default router;
