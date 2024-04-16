const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const jwtSecret = process.env.JWT_SECRET;

const generateUserJwtToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

const generateHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  const hashed_password = await bcrypt.hash(password, salt);

  return hashed_password;
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res
      .status(422)
      .json({ errors: ["This current e-mail address already exists."] });

    return;
  }
  const hashed_password = await generateHashPassword(password);
  const new_user = await User.create({
    name,
    email,
    password: hashed_password,
  });

  if (!new_user) {
    res
      .status(422)
      .json({ errors: ["This current e-mail address already exists."] });

    return;
  }

  res
    .status(201)
    .json({ _id: new_user._id, token: generateUserJwtToken(new_user._id) });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const has_user = await User.findOne({ email });

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

const update = async (req, res) => {
  const { name, password, bio } = req.body;

  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }
  try {
    const current_user = req.user;

    const user = await User.findById(current_user._id).select("-password");

    if (name) {
      user.name = name;
    }

    if (password) {
      user.password = await generateHashPassword(password);
    }

    if (profileImage) {
      user.profileImage = profileImage;
    }

    if (bio) {
      user.bio = bio;
    }

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ errors: ["User not found."] });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const has_user = await User.findById(id).select("-password");
    if (!has_user) {
      return res.status(404).json({ errors: ["User not found."] });
    }
    return res.status(200).json(has_user);
  } catch (error) {
    return res.status(404).json({ errors: ["User not found."] });
  }
};

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
};
