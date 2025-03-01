import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface AuthRequest extends Request {
  user?: string;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Access Denied" });
    return; // Ensure function exits
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.user = decoded.id;
    next(); // Proceed to the next middleware or controller
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
