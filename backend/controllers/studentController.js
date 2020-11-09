import Student from "../models/studentModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get all student
// @route   GET  /api/students
// @access  Public
const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find({}).populate("major", "name");

  res.json(students);
});

// @desc    Add student
// @route   POST  /api/students
// @access  Public
const addStudent = asyncHandler(async (req, res) => {
  const { firstname, lastname, age, major, email, phone } = req.body;

  const student = new Student({
    firstname,
    lastname,
    age,
    major,
    email,
    phone,
  });

  await student.save();

  res.json(student);
});

// @desc    Get student details
// @route   GET  /api/students/:stud_id
// @access  Public
const getStudentDetails = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.stud_id).populate(
    "major",
    "name"
  );

  if (student) {
    res.json(student);
  } else {
    res.status(404);
    throw new Error("Student Not Found");
  }
});

// @desc    Update student
// @route   PUT  /api/students/:stud_id
// @access  Public
const updateStudent = asyncHandler(async (req, res) => {
  const { firstname, lastname, age, major, email, phone } = req.body;

  const updateStudent = await Student.findById(req.params.stud_id).populate(
    "major",
    "name"
  );

  if (updateStudent) {
    updateStudent.firstname = firstname || updateStudent.firstname;
    updateStudent.lastname = lastname || updateStudent.lastname;
    updateStudent.age = age || updateStudent.age;
    updateStudent.major = major || updateStudent.major;
    updateStudent.email = email || updateStudent.email;
    updateStudent.phone = phone || updateStudent.phone;

    await updateStudent.save();

    res.json(updateStudent);
  } else {
    res.status(404);
    throw new Error("Student Not Found");
  }
});

// @desc    Delete student
// @route   DELETE  /api/students/:stud_id
// @access  Public
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.stud_id);

  if (student) {
    await student.remove();

    res.json({ msg: "Student deleted" });
  } else {
    res.status(404);
    throw new Error("Student Not Found");
  }
});

export {
  getStudents,
  getStudentDetails,
  addStudent,
  updateStudent,
  deleteStudent,
};
