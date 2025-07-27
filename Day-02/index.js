import express from "express";
import loginHandler from "./loginController.js";
const server = express();

server.use(express.json());


server.get("/", (req, res) => {
    res.send("Request was arrived");
})
server.get("/post", (req, res) => {
    res.json({
        name: "Krishna",
        course: "backend"
    })
})

//post request
server.post("/login", loginHandler)

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})