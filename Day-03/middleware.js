async function loginMiddleware(req, res, next) {
    req.body.username = "Hari"
    next();
}
export default loginMiddleware