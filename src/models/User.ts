import mongoose from "mongoose";
import { Character } from "./CharacterSheet";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: String, required: true },
  charater_sheets_ids: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Character" },
  ],
});
