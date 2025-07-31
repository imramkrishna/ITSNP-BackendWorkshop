
const jwtSecret = "45667"
async function tokenVerificationMiddleware(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        res.status(401).json({ message: "No token provided" });
        return;
    }
    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}
export default tokenVerificationMiddleware;
