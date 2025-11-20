
// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/profile", (req, res) => {
  console.log("Received Profile:", req.body);
  res.json({ message: "Profile saved successfully!", data: req.body });
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
