// import { users } from "./users.js";
// function profileMiddleware(req, res, next) {
//     const { email } = req.body;
//     const user = users.find(u => u.email == email);
//     if (user) {
//         req.user = user;
//         next();
//     }
//     res.send("Invalid email")
// }
// export default profileMiddleware;