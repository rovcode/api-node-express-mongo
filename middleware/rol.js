const {handlerError} = require("../helpers/handleError");

/**
 * Se declara un array con los roles permitidos
 * @param {*} rol 
 * @returns 
 * 
 */
const checkRol = (roles) => (req, res, next) =>{
    try {
       const {user} = req;
       const rolesByUser = user.role; 
       const checkValueRol = roles.some((rolSingle)=>rolesByUser.includes(rolSingle))
       if(!checkValueRol){
         handlerError(res,"Usuario sin permisos", 403)
         return
       }
       next();
    } catch (error) {
        handlerError(res,"Error de permisos", 403) 
    }
}
module.exports = checkRol