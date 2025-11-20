import express from "express";
const router = express.Router();

// placeholder
router.get("/all", (req, res) => {
  res.json({ message: "Profiles route working" });
});

export default router;
