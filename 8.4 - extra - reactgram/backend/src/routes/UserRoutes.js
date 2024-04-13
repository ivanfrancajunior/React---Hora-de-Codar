const express = require("express");
const router = express.Router();

const validate = require("../middlewares/handleValidations.js");
const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} = require("../middlewares/userValidations.js");

const { authGuard } = require("../middlewares/authGuard.js");
const {
  register,
  login,
  update,
  getCurrentUser,
} = require("../controllers/userController");
const { imageUpload } = require("../middlewares/imageUpload.js");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);

module.exports = router;
