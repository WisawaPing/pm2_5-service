import "module-alias/register";
import express from "express";
import cors from "cors";
import db from "~/models";
import routes from "~/routes";
import compression from "compression";
import fileUpload from "express-fileupload";
import path from "path";
import fs from "fs";

const app = express();

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Folder สำหรับอัพโหลดไฟล์
const UPLOAD_DIR = path.join(process.cwd(), "public/upload-files");

// สร้างโฟลเดอร์ถ้าไม่อยู่
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  console.log("สร้างโฟลเดอร์ public/upload-files เรียบร้อย");
}

// เปิด static path /uploads
app.use("/uploads", express.static(UPLOAD_DIR));

// Sync DB
db.sequelize.sync();

// Routes ปกติของคุณ
routes.forEach(({ path, router }) => {
  app.use(path, router);
});

// Root route
app.get("/", (req, res) => {
  res.json({ response_status: "SUCCESS", message: "Service API!" });
});

// Upload file API
app.post("/api/upload/file", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({
        response_status: "ERROR",
        message: "No file uploaded",
      });
    }

    const file = req.files.file;
    const fileName = `${Date.now()}_${file.name}`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    // ย้ายไฟล์ไป public/upload-files
    await file.mv(filePath);

    // ส่ง URL กลับ
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${fileName}`;

    res.json({
      response_status: "SUCCESS",
      message: "File uploaded successfully",
      url: fileUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      response_status: "ERROR",
      message: err.message || "Internal Server Error",
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    response_status: "ERROR",
    message: "Route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    response_status: "ERROR",
    message: err.message || "Internal Server Error",
  });
});

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
