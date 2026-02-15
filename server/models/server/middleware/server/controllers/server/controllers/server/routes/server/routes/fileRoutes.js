import express from "express";
import multer from "multer";
import { verifyToken } from "../middleware/authMiddleware.js";
import { uploadFile, getFiles } from "../controllers/fileController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/upload", verifyToken, upload.single("file"), uploadFile);
router.get("/", verifyToken, getFiles);

export default router;
