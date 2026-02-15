import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  shareLink: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("File", fileSchema);
