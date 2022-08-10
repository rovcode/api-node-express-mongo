const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../helpers/helperStorage')
const {createItem} = require('../controllers/storage')
//puedo usar multi para varios archivos
router.post('/',uploadMiddleware.single("miarchivo"),createItem);
module.exports = router
