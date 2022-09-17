const ENGINE_DB = process.env.ENGINE_DB;
/**
 * 
 * @returns retorna propiedades de la configuracion del engine, ya sea SQL o NoSQL.
 */
const getProps = () => {
    const data = {
      nosql:{
          id:'_id'
      },
      sql:{
         id:'id'
      }
    }
    return data[ENGINE_DB]
};
module.exports = getProps