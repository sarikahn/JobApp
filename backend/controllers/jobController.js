import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  type: { type: String, enum: ["Full-Time", "Part-Time", "Remote", "Internship"] },
  location: String,
  description: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Job", jobSchema);
