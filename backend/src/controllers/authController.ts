import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../schemas/User";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {username, email, password} = req.body;

    const hashedPass = await bcrypt.hash(password, 10)

    const user: User = new User({
      username,
      email,
      password: hashedPass
    })

    await user.save();
    res.json({
      msg: "User registered successfully"
    })
  } catch (error) {
    res.status(403).json({
      error: "registration failed"
    })
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({ email })

    if( !user || (await bcrypt.compare(password, user.password))){
      return res.json({
        msg: "Invalid inputs"
      })
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

    res.json({
      token
    });

  } catch (error) {
    res.status(403).json({
      msg: "Login failed"
    })
  }
}
