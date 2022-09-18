const bcryptjs = require("bcryptjs");
const encrypt = async (passPlain) => {
  const hash = await bcryptjs.hash(passPlain, 10);
  return hash
};
/**
 * 
 * @param {*} passPlain 
 * @param {*} hash 
 * @returns
 *  Se espera las dos contraseñas para validación y se retorna si es igual o no.
 */
const compare = async (passPlain, hash) => {
  //return await bcryptjs.compare(passPlain, hash);
 return (passPlain===hash) ? true : false;
};
module.exports = { encrypt, compare };
