const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handlerError } = require("../helpers/handleError");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (err) {
    handlerError(res, "Error en getItems");
  }
};
const showdetailsItem = async (req, res) => {
   try {
    req=matchedData(req);
    const {id}= req;
    const data = await tracksModel.findById(id);
    res.send({ data });
   } catch (error) {
    handleHttpError(res, "Error en get item");
   }
};
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (err) {
    handlerError(res, "Error en creando Items");
  }
};
const updateItem = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(
      id, body
    );
    res.send({ data });
  } catch (err) {
    handlerError(res, "Error en actualizar Items");
  }
};
const deleteItem = async (req, res) => {
   try{
    const body = matchedData(req);
    const {id} = body;
    const data = await tracksModel.delete({_id:id});
    res.send({ data });
   }catch(err){
     handleError(res, "Error al eliminar items");
   }
};

module.exports = {
  getItems,
  showdetailsItem,
  createItem,
  updateItem,
  deleteItem,
};
