/**
 * Se debe pasar los diguientes parametros, por defecto tiene el 403 
 * @param {*} res 
 * @param {*} message 
 * @param {*} code 
 */

const handlerError = (res, message='Algo paso', code=403)=>
{
    res.status( code );
    res.send({error: message});
}
module.exports = {handlerError};