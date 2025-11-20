import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true }, // e.g. Full-time, Internship
    description: { type: String, required: true },

    applicants: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: String,
        email: String,
        resume: String,
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;




