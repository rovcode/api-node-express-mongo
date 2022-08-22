const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../helpers/helperStorage')
const { validaGetItem } = require("../validators/storage");
const {getItems, createItem, showdetailsItem, updateItem, deleteItem} = require('../controllers/storage')
//puedo usar multi para varios archivos
/**
 * List/Read 
 */
router.get('/', getItems);
/**
 * Details 
 */
router.get('/:id', validaGetItem, showdetailsItem);
/**
 * Add 
 */
router.post('/',uploadMiddleware.single("miarchivo"),createItem);
/**
 * Update 
 */
router.get('/:id', validaGetItem, updateItem);
/**
 * Delete 
 */
router.delete('/:id', validaGetItem, deleteItem);

module.exports = router
