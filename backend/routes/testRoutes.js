import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Create a simple test schema
const TestSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const TestModel = mongoose.model("Test", TestSchema);

// ✅ Add data
router.post("/add", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newData = new TestModel({ name, email });
    await newData.save();
    res.json({ message: "✅ Data saved successfully", data: newData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all data
router.get("/all", async (req, res) => {
  try {
    const data = await TestModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
