const express = require('express')
const router = express.Router()
const {validaCreateItem} = require('../validators/tracks')
const {getItems, showdetailsItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')
router.get("/",getItems)
router.post("/",validaCreateItem,createItem)
module.exports = router