const express = require("express");
const router = express.Router();
const { authGuard } = require("../middlewares/users/authGuard.js");
const { imageUpload } = require("../middlewares/users/imageUpload.js");
const {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById
} = require("../controllers/photoController.js");
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

router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/:id", authGuard, getPhotoById);

module.exports = router;
