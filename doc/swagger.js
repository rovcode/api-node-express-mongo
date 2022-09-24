const swaggerJsdoc = require("swagger-jsdoc");
/**
 *  API config information
 */
const swaggerDefinition  = {
  openapi: "3.0.0",
  info: {
    title: "API Delifazil",
    verion: "1.0.1",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
    },
  ],
  components:{
    securitySchemes:{
      delifazilAuth:{
        type:"http",
        scheme:"bearer",
      }
    },
    schemas: {
      track:{
        type: "object",
        required: ["name","album","cover","artist"],
        properties: {
          name: {
            type: "string",
          },
          album: {type: "string"},
          cover: {type: "string"},
          artist: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              nickname: {type: "string"},
              nationality: {type: "string"}
            }
          },
          durations:{
             type: "object",
             properties: {
              start: {
                type: "intger",
              },
              end:{
                type: "intger",
              }
  
            }
          },
          mediaId:{
            type: "string",
          }
        }
      },
      storage:{
        type: "object",
        properties: {
          url:{
            type:"string",
          },
          filename:{
            type:"string",
          }
        }
      },
      authLogin:{
        type:"object",
        required:["email", "password"],
        properties:{
          email: {
            type: "string",
          },
          password: {
            type: "string",
          }
        }
      },
      authRegister:{
        type:"object",
        required:["email", "password","fechaNac","name"],
        properties:{
          name:{
            type: "string",
          },
          fechaNac:{type: "Date"},
          email:{type: "string"},
          password:{
            type: "string",
          }
        }
      }
    }
  }
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
