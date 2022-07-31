const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    const data = ["Hola","Mundo"]
    res.send({data})
})

module.exports = router