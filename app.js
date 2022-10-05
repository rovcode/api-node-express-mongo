require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const loggerStream = require("./helpers/handleLogger");
const dbConectionNoSQL  = require("./config/mongo");
const {dbConnectMySQL } = require("./config/mysql");
const openApiConfiguration = require("./doc/swagger");
const swaggerUI = require("swagger-ui-express");
const app = express();
const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || "development";
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
/**
 * Definimos las rutas de la documentacion
 */
 app.use('/docs',swaggerUI.serve, swaggerUI.setup(openApiConfiguration) )
/**
 * LLamamos a las rutas
 */
app.use("/api", require("./routes"));
if(NODE_ENV !== "test") {
  app.listen(port);
}

//dbConectionNoSQL()
if (ENGINE_DB === 'nosql') {
  dbConectionNoSQL();
} else {
  dbConnectMySQL();
}
module.exports = app;
