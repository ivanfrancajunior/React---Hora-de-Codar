const express = require("express");
const router = express.Router();

const {
  photoInsertValidation,
} = require("../middlewares/photo/photoValidation");
const authGuard = require("../middlewares/user/authGuard");
const validate = require("../middlewares/user/handleValidations");
module.exports = router;
