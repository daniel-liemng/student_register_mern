import Major from "../models/majorModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get all majors
// @route   GET  /api/majors
// @access  Public
const getMajors = asyncHandler(async (req, res) => {
  const majors = await Major.find({});

  res.json(majors);
});

// @desc    Add major
// @route   POST  /api/majors
// @access  Public
const addMajor = asyncHandler(async (req, res) => {
  const major = new Major({ name: req.body.name });

  await major.save();

  res.status(201).json(major);
});

// @desc    Update major
// @route   PUT  /api/majors/:major_id
// @access  Public
const updateMajor = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const updatedMajor = await Major.findById(req.params.major_id);

  if (updatedMajor) {
    updatedMajor.name = name;

    await updatedMajor.save();

    res.json(updatedMajor);
  } else {
    res.status(404);
    throw new Error("Major Not Found");
  }
});

// @desc    Delete major
// @route   DELETE  /api/majors/:major_id
// @access  Public
const deleteMajor = asyncHandler(async (req, res) => {
  const major = await Major.findById(req.params.major_id);

  if (major) {
    await major.remove();

    res.json({ msg: "Major deleted" });
  } else {
    res.status(404);
    throw new Error("Major Not Found");
  }
});

export { getMajors, addMajor, updateMajor, deleteMajor };
