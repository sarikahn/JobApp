import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  phone: String,
  skills: [String],
  experience: String,
});

export default mongoose.model("Profile", profileSchema);
