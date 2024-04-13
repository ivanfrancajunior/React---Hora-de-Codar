const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const jwtSecret = process.env.JWT_SECRET;

const generateUserJwtToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

//register and signIn

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const already_exists = await User.findOne({ email });
  if (already_exists) {
    res
      .status(422)
      .json({ erros: ["This current e-mail address already exists."] });

    return;
  }
  const salt = await bcrypt.genSalt(10);

  const hashed_password = await bcrypt.hash(password, salt);

  const new_user = await User.create({
    name,
    email,
    password: hashed_password,
  });

  if (!new_user) {
    res
      .status(422)
      .json({ erros: ["This current e-mail address already exists."] });

    return;
  }

  res
    .status(201)
    .json({ _id: new_user._id, token: generateUserJwtToken(new_user._id) });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const has_user = await User.findOne({ email });

  console.log("validei usuário");

  if (!has_user) {
    res.status(404).json({ errors: ["User not found."] });
    return;
  }

  const password_match = await bcrypt.compare(password, has_user.password);

  if (!password_match) {
    res.status(422).json({ errors: ["Wrong password"] });
    return;
  }

  res.status(201).json({
    _id: has_user._id,
    profileImage: has_user.profileImage,
    token: generateUserJwtToken(has_user._id),
  });
};

const getCurrentUser = async (req, res) => {
  const user = req.user;

  res.status(200).json(user);
};

module.exports = {
  register,
  login,
  getCurrentUser,
};
