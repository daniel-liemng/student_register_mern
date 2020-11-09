import express from "express";
import { addMajor } from "../controllers/majorController.js";
import {
  getStudents,
  getStudentDetails,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getStudents).post(protect, addStudent);
router
  .route("/:stud_id")
  .get(getStudentDetails)
  .put(protect, updateStudent)
  .delete(protect, deleteStudent);

export default router;
