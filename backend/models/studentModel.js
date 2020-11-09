import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastname: {
      type: String,
      required: [true, "Last Name is required"],
    },
    age: {
      type: Number,
      required: [true, "Password is required"],
    },
    major: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Major",
      required: [true, "Major is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
