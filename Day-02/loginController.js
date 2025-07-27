async function loginHandler(req, res) {
    const { username, password } = req.body;
    res.json({
        message: "Request received",
        user: {
            username, password
        }
    })
}
export default loginHandler