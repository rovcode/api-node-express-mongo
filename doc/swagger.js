const swaggerJsdoc = require("swagger-jsdoc");
/**
 *  API config information
 */
const swaggerDefinition  = {
  openapi: "3.0.0",
  info: {
    title: "API proyecto Delifazil",
    verion: "1.0.1",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
    },
  ],
};
/**
 * options for openApiConfiguration
 */
const options = {
    swaggerDefinition ,
  apis: ["./routes/*.js"],
};
const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;
