import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String },
  type: { type: String },
  domain: { type: String },
  status: { type: String, default: "Applied" },
  appliedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);
export default Application;
