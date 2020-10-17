const jwt = require("jsonwebtoken");
const withAuth = function(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, "secret", function(err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.username = decoded.username;
        req.fullName = decoded.fullName;
        next();
      }
    });
  }
};
module.exports = withAuth;
