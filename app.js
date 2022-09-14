require("dotenv").config()
const express = require('express')
const cors = require('cors')
const morganBody = require('morgan-body')
const loggerStream = require('./helpers/handleLogger')
const dbConection = require('./config/mongo') 
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("storage"))


morganBody(app, {
     noColors: true,
     stream: loggerStream,
     skip: function (req, res){
          return res.statusCode < 400
     }
})
const port = process.env.PORT || 3000

//Llamamos a las rutas
app.use("/api", require("./routes"))
app.listen(port, ()=>{
     console.log('*****SERVIDOR INICIADO EN*****')
     console.log('http://localhost:'+port+'')
})
dbConection()