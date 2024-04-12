const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const jwtSecret = process.env.JWT_SECRET;

const generateUserJwtToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

//register and signIn

const register = async (req, res) => {
  return res.send('works');
};

module.exports = {
  register,
};
