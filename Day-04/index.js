import express from "express"
import { users } from "./users.js";
import { rateLimit } from 'express-rate-limit'
const app = express();
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    limit: 5,
    message: "Maximum attempt reached."
})
app.use(express.json());
app.use(limiter)

// app.post("/profile", (req, res) => {
//     res.json({
//         user: req.user
//     });
// });

app.get("/profile", (req, res) => {
    throw new Error("Invalid , error found")
})
app.get("/user", (req, res) => {
    const { id } = req.query; // req.params --> we send it directly in our api route
    //req.query ---> we send without altering our api --> ? id=we sent id here,,,
    console.log("Query", req.query);
    console.log("Params", req.params);
    const user = users.find(u => u.id == id);
    if (!user) {
        res.status(404).send("Invalid idd");
        return;
    }
    res.status(201).json({
        user
    })
})
//global error handler
app.use((err, req, res, next) => {
    res.status(402).json({
        message: err.message
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});