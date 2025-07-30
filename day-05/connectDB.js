import mongoose from "mongoose";
async function connectDB() {
    const connectionString = "your_mongoDB_string"
        .catch(() => {
            console.log("error while connecting to databse.")
        })
}
export default connectDB;