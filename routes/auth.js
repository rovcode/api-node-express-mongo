const express = require('express')
const { matchedData } = require("express-validator");
const router = express.Router()
const {validaRegisterUser, validaLogin} = require('../validators/auth')
const { encrypt, compare } = require('../helpers/handlePassword')
const { usersModel} = require('../models')
/**
 * Crear un registro en mongo DB 
 */
router.post("/register", validaRegisterUser, async (req, res) => {
  req = matchedData(req);
  const passs = await encrypt(req.passsword)  
  const body = {...req, passs}
  const data = await usersModel.create(body)
  res.send({ data});
});

module.exports = router