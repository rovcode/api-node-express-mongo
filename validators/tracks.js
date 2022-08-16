const {check } = require('express-validator');
const helpervalidatorResults= require('../helpers/helperValidator')
const validaCreateItem = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty(),
  (req, res, next) => {
    return helpervalidatorResults (req, res, next);
  }
];
const validaGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return helpervalidatorResults (req, res, next);
  }
];
module.exports = {validaCreateItem, validaGetItem};