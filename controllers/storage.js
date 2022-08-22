const { storageModel } = require("../models");
const { validaGetItem } = require("../validators/storage");
const { matchedData } = require("express-validator");
const fs = require("fs");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = "" + __dirname + "/../storage";
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleError(res, "Error get files");
  }
};
const showdetailsItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleError(res, "Get details file");
  }
};
const createItem = async (req, res) => {
  const { file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: PUBLIC_URL + "/" + file.filename,
  };
  const data = await storageModel.create(fileData);

  res.send({ data });
};
const updateItem = async (req, res) => {};
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await storageModel.findById(id);
    const { filename } = dataFile;
    const filePath = "" + MEDIA_PATH + "/" + filename; //Ruta del archivo a eliminar
    await storageModel.deleteOne(id);
    //await storageModel.delete({_id: id}); para eliminar en la base de datos pero no el archivo [softdelete]
    fs.unlinkSync(filePath);
    console.log(filePath);
    const data = {
      filePath,
      deleted: 1,
    };
    res.send({ data });
  } catch (err) {
    handleError(res, "error delete file");
  }
};

module.exports = {
  getItems,
  showdetailsItem,
  createItem,
  updateItem,
  deleteItem,
};
