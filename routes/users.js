const express = require('express')
const router = express.Router()
router.get("/", (req, res) => {
    const data = ["Hola","users"]
    res.send({data})
})

module.exports = router