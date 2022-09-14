const { handlerError } = require("../helpers/handleError");
const { verifyToken } = require("../helpers/handleJWT");
const {usersModel} = require("../models")
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handlerError(res, "No ingresó un token valido", 401)
      return
    }
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (!dataToken._id) {
      handlerError(res, "Error en el idenficador de token", 401);
      return;
    }
    const user = await usersModel.findById(dataToken._id);
    req.user = user;
    next()
  } catch (error) {
    handlerError(res, "No se inicia sesión", 401);
  }
};
module.exports = { authMiddleware };
