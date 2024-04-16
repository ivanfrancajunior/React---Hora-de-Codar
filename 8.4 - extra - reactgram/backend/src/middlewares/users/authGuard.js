const User = require("../../models/User.js");
const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ errors: ["Not authorized"] });

  try {
    const is_valid = jwt.verify(token, jwt_secret);
    req.user = await User.findById(is_valid.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ errors: ["Invalid token."] });
  }
};

module.exports = { authGuard };
