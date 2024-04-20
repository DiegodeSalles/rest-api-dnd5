import mongoose from "mongoose";

const UserTesteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: String, required: true },
});
