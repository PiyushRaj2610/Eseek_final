import express from "express";
import { createTeam, getTeams, joinTeam } from "../controllers/team.controller";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.post("/create", authMiddleware, createTeam);
router.get("/", getTeams);
router.post("/join", authMiddleware, joinTeam);

export default router;
