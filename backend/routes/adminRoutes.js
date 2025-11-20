import express from "express";
import User from "../models/User.js";
import Job from "../models/Job.js";

const router = express.Router();

// GET all users with their applied jobs
router.get("/all-data", async (req, res) => {
  try {
    const users = await User.find(); // get all users

    // Attach applied job details for each user
    const usersWithJobs = await Promise.all(
      users.map(async (user) => {
        // Get full job info for jobs this user applied to
        const jobsApplied = await Job.find({ _id: { $in: user.appliedJobs } });

        return {
          _id: user._id,
          name: user.name,
          email: user.email,
          resume: user.resume,
          appliedJobs: jobsApplied,
        };
      })
    );

    res.json(usersWithJobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
