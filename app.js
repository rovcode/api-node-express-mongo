require("dotenv").config()
const express = require('express')
const cors = require('cors')
const dbConection = require('./config/mongo') 
const app = express()
app.use(cors())
const port = process.env.PORT || 3000

//Llamamos a las rutas
app.use("/api", require("./routes"))
app.listen(port, ()=>{
    console.log(' *****SERVIDOR INICIADO EN****')
     console.log('http://localhost:'+port+'')
})
dbConection()