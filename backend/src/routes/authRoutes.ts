import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../schemas/User";

interface AuthRequest extends Request {
  user: any
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if(!token){
    return res.status(403).json({
      msg: "access denied"
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      msg: "failed middleware authentication"
    })
  }
}