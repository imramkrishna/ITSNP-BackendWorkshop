import express from "express";
import connectDB from "./connectDB.js";
import User from "./userSchema.js";
import jwt from "jsonwebtoken";
import tokenVerificationMiddleware from "./middleware.js";
const jwtSecret = "45667"
const app = express();
app.use(express.json());
connectDB();
app.get("/getUser", tokenVerificationMiddleware, async (req, res) => {
    if (!req.user) {
        res.status(401).json({ message: "Unauthorized access" });
        return;
    }
    res.status(200).json({
        message: "User retrieved successfully",
        user: req.user
    });
})
//token verification middleware,
app.post("/login", async (req, res) => {
    const { email, phone } = req.body;
    //verify ---> do user exist with following email and phone --> If yes, token as response ELse invalid credentials
    const user = await User.findOne({ email, phone });
    if (!user) {
        res.status(401).json({
            message: "Invalid credentials"
        });
        return
    }
    const token = jwt.sign({ user }, jwtSecret);
    if (!token) {
        res.status(500).json({
            message: "Error generating token"
        });
        return;
    }
    res.status(200).json({
        message: "Login successful",
        token
    })
})


app.listen(3000, () => `Server running on port 3000 🔥`);