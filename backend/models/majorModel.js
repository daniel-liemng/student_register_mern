import mongoose from "mongoose";

const majorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Major name is required"],
    },
  },
  { timestamps: true }
);

const Major = mongoose.model("Major", majorSchema);

export default Major;
