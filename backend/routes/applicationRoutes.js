import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

// POST - Apply for a job
router.post("/", async (req, res) => {
  try {
    const { email, jobId, jobTitle, company } = req.body;

    if (!email || !jobId || !jobTitle) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const application = new Application({
      email,
      jobId,
      jobTitle,
      company,
      appliedAt: new Date(),
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully", application });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;




