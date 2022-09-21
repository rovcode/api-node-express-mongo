const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handlerError } = require("../helpers/handleError");

/**
 *  Obtenemos la lista de tracks
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await tracksModel.findAllData({});
     console.log(data);
     console.log(user);
    res.send({ data, user })
  } catch (err) {
    handlerError(res, "Error en getItems");
    console.log(err);
  }
};

/**
 * mostramos el detalle de un items
 * @param {*} req
 * @param {*} res
 */
const showdetailsItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.findOneData(id);
    res.send({ data });
  } catch (error) {
    handlerError(res, "Error en get item");
    console.log(error);
  }
};
/**
 *  creamos un registro en mongoDB
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
    console.log(data);
  } catch (err) {
    handlerError(res, "Error en creando Items");
  }
};
/**
 *  Actualizamos un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (err) {
    handlerError(res, "Error en actualizar Items");
  }
};
/**
 *  Eliminamos un registro en MongoDB
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const { id } = body;
    const data = await tracksModel.delete({ _id: id });
    res.send({ data });
  } catch (err) {
    handleError(res, "Error al eliminar items");
  }
};
/**
 * Exportamos los metodos desde el controlador
 */
module.exports = {
  getItems,
  showdetailsItem,
  createItem,
  updateItem,
  deleteItem,
};
