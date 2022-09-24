const { Sequelize } = require("sequelize");
/**
 * Se requiere parametros para  Sequalize
 */
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
const sequelize = new Sequelize(database, username, password, {
  host,  
  dialect: "mysql",
});

//Metodo de conexión
const dbConnectMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion correcta desde MySQL")
  } catch (e) {
    console.log("Error en la conexión con MySQL",e);

  }
};
module.exports = { sequelize, dbConnectMySQL}
