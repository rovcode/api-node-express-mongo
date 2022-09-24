const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../helpers/handlePassword");
const { createToken } = require("../helpers/handleJWT");
const { handlerError } = require("../helpers/handleError");
const { usersModel } = require("../models");
/**
 * Se establece metodo reggistro
 * @param {*} req
 * @param {*} res
 */
const registerController = async (req, res) => {
  try {
    req = matchedData(req);
    const passs = await encrypt(req.password);
    const body = { ...req, passs };
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    data = {
      user: dataUser,
      token: await createToken(dataUser),
    };
    res.status(201);
    res.send({ data });
  } catch (e) {
    handlerError(res, "Error register user");
  }
};

const loginController = async (req, res) => {
  try {
    req = matchedData(req);
    user = await usersModel.findOne({ where: { email: req.email } });
    if (!user) {
      handlerError(res, "User not found", 404);
      return;
    }
    const hashPassword = user.get("password");
    const check = await compare(req.password, hashPassword);
    if (!check) {
      handlerError(res, "Password incorrect", 401);
      return;
    }
    user.set("password", undefined, { strict: false });
    const data = {
      token: await createToken(user),
      user,
    };
    res.send({ data });
  } catch (e) {
    handlerError(res, "Error login user");
    console.log(e);
  }
};

module.exports = { registerController, loginController };
