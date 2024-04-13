const express = require("express");
const router = express.Router();

const validate = require("../middlewares/handleValidations.js");
const {
  userCreateValidation,
  loginValidation,
} = require("../middlewares/userValidations.js");

const { authGuard } = require("../middlewares/authGuard.js");
const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/userController");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);

module.exports = router;
