import express from "express";
import Job from "../models/Job.js"; // fixed path

const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add job
router.post("/", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
