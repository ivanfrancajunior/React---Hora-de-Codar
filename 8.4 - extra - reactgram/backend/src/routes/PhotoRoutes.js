const express = require("express");
const router = express.Router();
const { authGuard } = require("../middlewares/users/authGuard.js");
const { imageUpload } = require("../middlewares/users/imageUpload.js");
const { insertPhoto } = require("../controllers/photoController.js");
const {
  photoInsertValidation,
} = require("../middlewares/photos/photoValidation.js");
const validate = require("../middlewares/users/handleValidations.js");

router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

module.exports = router;