const {check } = require('express-validator');
const helpervalidatorResults= require('../helpers/helperValidator')
const validaGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return helpervalidatorResults (req, res, next);
  }
];
module.exports = {validaGetItem};