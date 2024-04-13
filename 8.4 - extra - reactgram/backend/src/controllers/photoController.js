const Photo = require("../models/Photo");
const User = require("../models/User");
const mongoose = require("mongoose");
const fs = require("fs");
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
            "Ocorreu um erro ao tentar deletar os arquivos da foto, tente novamente mais tarde.",
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

module.exports = { insertPhoto, deletePhoto };
