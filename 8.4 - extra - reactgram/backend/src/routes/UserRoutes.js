const express = require("express");
const router = express.Router();

const validate = require("../middlewares/handleValidations.js");
const { userCreateValidation } = require("../middlewares/userValidations.js");
const { register } = require("../controllers/userController.js");

router.post("/register", userCreateValidation(), validate, register);

module.exports = router;
