import Application from "../models/Application.js";

// Apply for a job
export const applyForJob = async (req, res) => {
  try {
    const { email, jobId, jobTitle, company } = req.body;
    const existing = await Application.findOne({ email, jobId });
    if (existing) return res.status(400).json({ message: "Already applied for this job" });

    const newApp = new Application({ email, jobId, jobTitle, company });
    await newApp.save();
    res.json({ message: "Application successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get user applications
export const getUserApplications = async (req, res) => {
  try {
    const { email } = req.params;
    const apps = await Application.find({ email });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
