import { z } from "zod";

export const registerUserSchema = z.object({
  gamertag: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export const createTeamSchema = z.object({
  teamName: z.string().min(3),
  game: z.string(),
  region: z.string(),
  skillLevel: z.string(),
  rolesNeeded: z.array(z.string()),
});
