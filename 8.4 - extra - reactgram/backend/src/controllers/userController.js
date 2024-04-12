const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const generateJwtToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

//register and signIn

const register = async (req, res) => {
  res.status(201).json({ message: "works!" });
};

module.exports = {
  register,
};
