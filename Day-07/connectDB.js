import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}
export default connectDB;
