require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const loggerStream = require("./helpers/handleLogger");
const dbConectionNoSQL  = require("./config/mongo");
const {dbConnectMySQL } = require("./config/mysql");
const app = express();
const ENGINE_DB = process.env.ENGINE_DB;
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
});
const port = process.env.PORT || 3000;

//Llamamos a las rutas
app.use("/api", require("./routes"));
app.listen(port, () => {
  console.log("*****SERVIDOR INICIADO EN*****");
  console.log("http://localhost:" + port + "");
});
//dbConectionNoSQL()
if (ENGINE_DB === 'nosql') {
  dbConectionNoSQL();
} else {
  dbConnectMySQL();
}
module.exports = app;
