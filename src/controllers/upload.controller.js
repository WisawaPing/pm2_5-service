import multer from "multer";
import path from "path";

// ตั้งค่า storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "public/upload-files")); // เก็บไฟล์ที่ public/upload-files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/**
 * Upload file controller
 */
export const uploadFile = [
  upload.single("file"), // field name ต้องเป็น "file"
  (req, res) => {
    if (!req.file) {
      return res
        .status(400)
        .json({ response_status: "ERROR", message: "No file uploaded" });
    }

    res.json({
      response_status: "SUCCESS",
      message: "File uploaded successfully",
      filePath: `/upload-files/${req.file.filename}`, // frontend ใช้ได้เลย
    });
  },
];
