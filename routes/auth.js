const express = require('express')
const { matchedData } = require("express-validator");
const router = express.Router()
const {registerController,loginController} = require("../controllers/auth")
const {validaRegisterUser, validaLogin} = require("../validators/auth")
/**
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *           tags:
 *               - auth
 *           summary: "Register new user"
 *           description: "This route is for register new user"
 *           requestBody:
 *                 content:
 *                     application/json:
 *                          schema:
 *                               $ref: '#/components/schemas/authRegister'
 *           responses:
 *                  '201':
 *                      description: "Successfully registered user"
 *                  '403':
 *                      description: "Error for registration new user"
 */
router.post("/register", validaRegisterUser, registerController);
router.post("/login", validaLogin, loginController);

module.exports = router