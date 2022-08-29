const {check } = require('express-validator');
const helpervalidatorResults= require('../helpers/helperValidator')

const validaRegisterUser = [
  check("name").exists().notEmpty().isLength({min:3, max:50}),
  check("fechaNac").exists().notEmpty(),
  check("password").exists().notEmpty().isLength({min:3, max:15}),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return helpervalidatorResults (req, res, next);
  }
];
const validaLogin = [
    check("password").exists().notEmpty().isLength({min:3, max:15}),
    check("email").exists().notEmpty().isEmail(),
    (req, res, next) => {
      return helpervalidatorResults (req, res, next);
    }
  ];
module.exports = {validaRegisterUser, validaLogin};