import { Router } from "express";
import controller from "~/controllers/innovationType.controller.js";
// ถ้าต้องการล็อกอินก่อนใช้งาน ให้เปิดบรรทัดด้านล่าง
// import auth from "~/middleware/auth.js";

const router = Router();

// router.use(auth);
router.post("/", controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.findOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
