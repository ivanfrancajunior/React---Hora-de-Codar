const express = require("express");
const router = express.Router();

const validate = require("../middlewares/users/handleValidations.js");
const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} = require("../middlewares/users/userValidations.js");

const { authGuard } = require("../middlewares/users/authGuard.js");
const {
  register,
  login,
  update,
  getCurrentUser,
  getUserById,
} = require("../controllers/userController.js");

const { imageUpload } = require("../middlewares/users/imageUpload.js");

router.get("/profile", authGuard, getCurrentUser);
router.get("/:id", authGuard, getUserById);
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);

router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);

module.exports = router;
