import mongoose, { Schema, model, Document } from "mongoose";

interface Team extends Document{
  teamName: string;
  game: string;
  rolesNeeded: string[];
  members: mongoose.Types.ObjectId[]
}

const teamSchema = new Schema<Team>({
  teamName: {
    type: String,
    required: true,
  },

  game: {
    type: String,
    required: true
  },

  rolesNeeded: {
    type: [String],
  },

  members: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User"
    }
  ]
})


const Team = model<Team>("Team", teamSchema)
export default Team;