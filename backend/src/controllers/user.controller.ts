import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { gamertag, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ gamertag, email, password: hashedPassword });
    
    res.status(201).json({ message: "User Registered", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Registration Failed" });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
};

export default loginUser;
