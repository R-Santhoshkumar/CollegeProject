async function roleSwitch(req, res) {
    let authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({ message: "Unauthorized: Missing or invalid token" });
    }

    // Extract the token part from the header
    const token = authHeader.split(' ')[1];

    console.log("TokenBac", token);
    
    try {
        const decoded = await jwt.verify(token, jwtsec);
        req.body.userData = decoded;
        console.log("decoded data", decoded);
        res.send({decoded})
        next(); // Proceed if verification successful
      } catch (err) {
        res.status(401).send({ message: "Session is expired, please login again" });
      }

}
module.exports = roleSwitch;