import mongoose from "mongoose";
async function connectDB() {
    const connectionString = "mongodb+srv://itsramky234:krishna@cluster0.xpocy3x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    mongoose.connect(connectionString)
        .then(() => console.log("Connected to Database"))
        .catch(() => {
            console.log("error while connecting to databse.")
        })
}
export default connectDB;