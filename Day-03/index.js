import express from "express";
import loginMiddleware from "./middleware.js";

const users = [{
    id: 1,
    username: "rkrishna",
    password: "password"
}, {
    id: 2,
    username: "harkirat",
    password: "pass"
},
{
    id: 3,
    username: "John",
    password: "john"
}]
const app = express();
app.use(express.json());
// ||-OR operator A,B->any of them true, return true
// &&-AND operator A,B->both true, return true

app.get("/profile", (req, res) => {
    res.send("Request Received")
    console.log(req.headers)
})

app.get("/user/:id", (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const user = users.find(u => u.id == id)
    if (user) {
        res.json({
            message: "user found",
            user //we have key-value pair in json
        })
        return;
    }
    res.json({
        message: "user not found",
        id
    })
})

// difference between Number and number
//Three Types of primitve data type: number,string,boolean
//Number, String, Boolean ---> works as a contructor with new Keyword
//but single use garayem bhane, type Convert Garna laii

app.post("/login", loginMiddleware, (req, res) => {
    const { username, password } = req.body;
    console.log(req.body.username)
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.status(200).send(`Welcome ${user.username}`);
    } else {
        res.status(401).send("Invalid credentials");
    }
})
app.listen(3000);