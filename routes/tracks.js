const express = require('express')
const router = express.Router()
const {validaCreateItem, validaGetItem} = require('../validators/tracks')
const {authMiddleware} = require("../middleware/session")
const {getItems, showdetailsItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')
const customHeader = require('../middleware/customHeader')
/** @
 * 
 *Lista tracks
 * */
router.get("/", authMiddleware, getItems)
/**
 * Crear un registro en mongo DB 
 */
router.post("/",validaCreateItem,createItem)
/**
 * Detalle de un item
 */
 router.get("/:id",validaGetItem,showdetailsItem)
/**
 *  Actualizar tracks
 */
 router.put("/:id",validaCreateItem, validaGetItem, updateItem)
/**
 * Eliminar tracks
 */
 router.delete("/:id",validaGetItem, deleteItem)

module.exports = router