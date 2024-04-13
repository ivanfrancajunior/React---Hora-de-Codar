const Photo = require("../models/Photo");
const User = require("../models/User");
const mongoose = require("mongoose");
const fs = require("fs");
const { log } = require("console");

const insertPhoto = async (req, res) => {
  const { title } = req.body;

  const image = req.file.filename;

  const request_user = req.user;

  const user = await User.findById(request_user._id);

  const new_photo = await Photo.create({
    image,
    title,
    userId: user._id,
    useName: user.name,
  });
  if (!new_photo) {
    return res
      .status(422)
      .json({ erros: ["A problem occurred. Please try again later."] });
  }
  res.status(201).json(new_photo);
};

const deletePhoto = async (req, res) => {
  const { id } = req.params;

  const req_user = req.user;

  try {
    const current_photo = await Photo.findById(new mongoose.Types.ObjectId(id));

    if (!current_photo) {
      res.status(404).json({ erros: ["Photo not found."] });
      return;
    }

    if (!current_photo.userId.equals(req_user._id)) {
      res
        .status(404)
        .json({ erros: ["A problem occurred. Please try again later."] });
      return;
    }

    const completeFilePath = `src/uploads/photos/${current_photo.image}`;

    await fs.unlink(`./${completeFilePath}`, (err) => {
      if (err) {
        res.status(422).json({
          errors: [
            "An error occurred while trying to delete the photo files, please try again later.",
          ],
        });
        return;
      }
    });

    await Photo.findByIdAndDelete(current_photo._id);

    res.status(200).json({
      id: current_photo._id,
      message: "Photo was sucessfully deleted. ",
    });
  } catch (error) {
    res
      .status(404)
      .json({ erros: ["A problem occurred. Please try again later."] });
  }
};
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

const getPhotoById = async (req, res) => {
  const { id } = req.params;

  try {
    const current_photo = await Photo.findById(new mongoose.Types.ObjectId(id));

    if (!current_photo) {
      return res.status(404).json({ erros: ["Photo not found."] });
    }
    return res.status(200).json(current_photo);
  } catch (error) {
    return res.status(404).json({ erros: ["Photo not found."] });
  }
};

const updatePhoto = async (req, res) => {
  const { id } = req.params;

  const req_user = req.user;

  const { title } = req.body;

  try {
    const current_photo = await Photo.findById(id);

    console.log(current_photo);

    if (!current_photo) {
      res.status(404).json({ erros: ["Photo not found."] });
      return;
    }
    console.log(req_user);
    if (!current_photo.userId.equals(req_user._id)) {
      res
        .status(422)
        .json({ erros: ["A problem occurred. Please try again later."] });
      return;
    }

    if (title) {
      current_photo.title = title;
    }

    await current_photo.save();

    res.status(200).json({
      current_photo,
      message: "Photo was sucessfully updated. ",
    });
  } catch (error) {
    res.status(422).json({ erros: ["Photo not found."] });
    return;
  }
};

const likePhoto = async (req, res) => {
  const { id } = req.params;

  const req_user = req.user;

  const photo = await Photo.findById(id);

  if (!photo) {
    res.status(404).json({ errors: ["Photo not found"] });
    return;
  }

  if (photo.likes.includes(req_user._id)) {
    res.status(422).json({ errors: ["You already liked this photo."] });
    return;
  }

  photo.likes.push(req_user._id);

  await photo.save();

  res.status(200).json({ photoId: id, userId: req_user._id, message: "Nice!" });
};

const commentPhoto = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  const photo = await Photo.findById(id);

  if (!photo) {
    res.status(404).json({ errors: ["Photo not found."] });
    return;
  }

  const userComment = {
    comment,
    userName: user.name,
    userImage: user.profileImage,
    userId: user._id,
  };

  photo.comments.push(userComment);

  await photo.save();

  res.status(200).json({
    comment: userComment,
    message: "Comment added successfully!",
  });
};

//TODO implement dislike fn
module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentPhoto,
};
