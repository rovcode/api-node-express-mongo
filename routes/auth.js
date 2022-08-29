const express = require('express')
const { matchedData } = require("express-validator");
const router = express.Router()
const {registerController,loginController} = require("../controllers/auth")
const {validaRegisterUser, validaLogin} = require("../validators/auth")
/**
 * Crear un registro en mongo DB 
 */
router.post("/register", validaRegisterUser, registerController);
router.post("/login", validaLogin, loginController);

module.exports = router