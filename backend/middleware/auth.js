// backend/middleware/auth.js
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // JWT sent in header: Authorization: token
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No Token." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};