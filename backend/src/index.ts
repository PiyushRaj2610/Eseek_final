import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/user.routes";
import teamRoutes from "./routes/team.routes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
