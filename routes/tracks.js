const express = require('express')
const router = express.Router()
const {getItems, showdetailsItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')
router.get("/",getItems)
router.post("/",createItem)
module.exports = router