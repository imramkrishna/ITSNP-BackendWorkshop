import express from 'express';
import bcrypt from "bcryptjs";
import User from './Schema/userSchema.js';
import connectDB from './connectDB.js';
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"

const app = express();
const PORT = 3000;
dotenv.config();
app.use(express.json());
const apiKey = process.env.apiKey
const ai = new GoogleGenAI({
    apiKey
});

//store data in db----> we dont push password idrectly into db intead we hash it

connectDB();

app.post('/createuser', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: username,
            email: email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/chatai", async (req, res) => {
    const { prompt } = req.body
    // The client gets the API key from the environment variable `GEMINI_API_KEY`
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    res.json({
        message: "success",
        answer: response.text
    })
})
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});