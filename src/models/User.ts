import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  charater_sheets_ids: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Characters" },
  ],
});

export const User = mongoose.model("Users", UserSchema);
