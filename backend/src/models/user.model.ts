import mongoose, { Schema, model, Document } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  password: string;
  game?: string[];
  role?: string[];
  achievements?: string[];
  clips?: string[];
  experience?: number;
  team?: string;
}

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  game: {
    type: [String],
  },

  role: {
    type: [String], 
  },

  achievements: {
    type: [String], 
  },

  clips: {
    type: [String],
  },

  experience: {
    type: Number,
  },
  
  team: {
    type: mongoose.Types.ObjectId,
    ref: "Team"
  },
});

const User = model<User>("User", userSchema);
export default User;
