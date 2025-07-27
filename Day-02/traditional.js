import http from "http"
import path from "path"
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Hello World")
})
// if (path === "/" && method == "GET") {

// } elseif(path === "/prfile" && method == "POST"){

// }
server.listen(3000, () => {
    console.log("Server is running on port 3000")
})