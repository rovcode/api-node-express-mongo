const express = require('express')
const router = express.Router()
const {validaCreateItem} = require('../validators/tracks')
const {getItems, showdetailsItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')
const customHeader = require('../middleware/customHeader')
router.get("/",getItems)
router.post("/",validaCreateItem,customHeader,createItem)
module.exports = router