const handlerError = (res, message='Algo paso', code=403)=>
{
    res.status( code );
    res.status({error: message});
}
module.exports = {handlerError};