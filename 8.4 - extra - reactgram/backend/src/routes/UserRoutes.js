const express = require("express");
const router = express.Router();

const validate = require("../middlewares/handleValidations.js");
const { userCreateValidation, loginValidation } = require("../middlewares/userValidations.js");
const { register, login } = require("../controllers/userController");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);

module.exports = router;
