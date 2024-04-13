const multer = require("multer");
const path = require("path");
const { v4: uuid } = require("uuid");

const resolveImagePath = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "";

    if (req.baseUrl.includes("users")) {
      folder = "users";
    } else if (req.baseUrl.includes("photos")) {
      folder = "photos";
    }
    //more if needs...

    cb(null, `src/uploads/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: resolveImagePath,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Please only send images in png or jpg format."));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload };
