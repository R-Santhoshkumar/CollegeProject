async function ResultView(req, res) {
    const { subject, semester, batch } = req.body;

    let authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .send({ message: "Unauthorized: Missing or invalid token" });
    }

    // Extract the token part from the header
    const token = authHeader.split(" ")[1];

    console.log(token);
    if (!token) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    // Verify the JWT token (replace 'your_secret_key' with your actual secret)
    const decoded = jwt.verify(token, jwtsec);

    // Extract email from the decoded JWT payload
    const tokenData = { email: decoded.email };
    if (!tokenData.email) {
      return res.status(400).send({ message: "Invalid token: Email missing" });
    }

}


module.exports.ResultView = ResultView;