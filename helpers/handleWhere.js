const ENGINE_DB = process.env.ENGINE_DB;
/**
 * 
 * @returns funciona para manejar el login dinámico dependiendo al engine que se tenga definido.
 */
const where = () => {
    const data = {
      nosql:{
        dato:'email:req.email'
      },
      sql:{
        dato:"email:req.email"
      }
    }
    return data[ENGINE_DB]
};
module.exports = where