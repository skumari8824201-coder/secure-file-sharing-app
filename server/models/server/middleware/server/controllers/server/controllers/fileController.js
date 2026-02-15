import File from "../models/File.js";
import { v4 as uuidv4 } from "uuid";

export const uploadFile = async (req, res) => {
  const shareLink = uuidv4();

  const file = await File.create({
    filename: req.file.originalname,
    path: req.file.path,
    owner: req.user.id,
    shareLink
  });

  res.json(file);
};

export const getFiles = async (req, res) => {
  const files = await File.find({ owner: req.user.id });
  res.json(files);
};
