const Photo = require("../models/Photo");
const User = require("../models/User");
const mongoose = require("mongoose");

const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const imageFile = req.file.filename;

  const request_user = req.user;

  const user = await User.findById(request_user._id);

  const new_photo = await Photo.create({
    image: imageFile,
    title,
    userId: user._id,
    useName: user.name,
  });
  if(!new_photo){
    return res.status(422).json({erros:['A problem occurred. Please try again later.']})
  }
  res.status(201).json(new_photo);
};

module.exports = { insertPhoto };
