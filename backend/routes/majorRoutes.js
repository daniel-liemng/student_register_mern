import express from "express";
import {
  getMajors,
  addMajor,
  updateMajor,
  deleteMajor,
} from "../controllers/majorController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getMajors).post(protect, addMajor);
router
  .route("/:major_id")
  .put(protect, updateMajor)
  .delete(protect, deleteMajor);

export default router;
