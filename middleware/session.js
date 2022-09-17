const { handlerError } = require("../helpers/handleError");
const { verifyToken } = require("../helpers/handleJWT");
const {usersModel} = require("../models")
const getProps = require("../helpers/helperPropsEngine")
const getPropsKey= getProps();
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handlerError(res, "No ingresó un token valido", 401)
      return
    }    
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (!dataToken) {
      handlerError(res, "No jwt", 401);
    }
    if (!dataToken._id) {
      handlerError(res, "Error en el idenficador de token", 401);
      return;
    }
    const query = {
      [getPropsKey.id]:dataToken[getPropsKey.id]
    }
    const user = await usersModel.findOne(query);
    req.user = user;
    next()
  } catch (error) {
    handlerError(res, "No se inicia sesión", 401);
  }
};
module.exports = { authMiddleware };
