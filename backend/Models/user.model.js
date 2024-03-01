import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    name: { type: String, default: "" },
    profile_url: { type: String, required: true },
    avatar_url: { type: String },
    liked_profiles: { type: [String], default: [] },
    likedBy: [
      {
        username: { type: String, required: true },
        avatar_url: { type: String },
        likedDate: { type: Date, default: Date.now() },
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
