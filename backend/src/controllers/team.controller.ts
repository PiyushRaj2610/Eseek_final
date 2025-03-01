import { Request, Response } from "express";
import Team from "../models/team.model";
import User from "../models/user.model";

interface AuthRequest extends Request {
  user?: string;
}

export const createTeam = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const { teamName, game, rolesNeeded } = req.body;

    const existingTeam = await Team.findOne({ teamName });
    if (existingTeam) return res.status(400).json({ error: "Team name already taken" });

    // At max 10 people in a team
    const newTeam = await Team.create({
      teamName,
      game,
      rolesNeeded,
      members: [req.user],
    });


    await User.findByIdAndUpdate(req.user, { team: newTeam._id });

    res.status(201).json({ message: "Team created successfully", team: newTeam });
  } catch (error) {
    res.status(500).json({ error: "Failed to create team" });
  }
};

export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await Team.find().populate("members", "gamertag role experience");
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch teams" });
  }
};

import mongoose from "mongoose";

export const joinTeam = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const { teamId } = req.body;
    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ error: "Team not found" });

    const userId = new mongoose.Types.ObjectId(req.user);

    if (!team.members.some(member => member.equals(userId))) {
      team.members.push(userId);
      await team.save();
    }

    await User.findByIdAndUpdate(req.user, { team: team._id });

    res.json({ message: "Joined team successfully", team });
  } catch (error) {
    res.status(500).json({ error: "Failed to join team" });
  }
};

