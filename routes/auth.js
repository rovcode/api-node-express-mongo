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
/**
 *  Login user
 * @openapi
 * /auth/login:
 *      post:
 *           tags:
 *             - auth
 *           summary: "Login user"
 *           description: Initialize a new session and get the token.
 *           responses:
 *             '200':
 *               description: Returns the object inserted into the collection.
 *             '422':
 *               description: Error of validation.
 *           requestBody:
 *                 content:
 *                   application/json:
 *                     schema:
 *                        $ref: "#/components/schemas/authLogin"
 *      responses:
 *        '201':
 *           description: Returns the object inserted into the collection which status '201'. 
 *        '403':
 *           description: You don't have permission '403
 */
router.post("/login", validaLogin, loginController);

module.exports = router