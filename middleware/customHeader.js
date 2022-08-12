const customHeader=( req, res, next ) => {
  try{
    const apiKey = req.headers.api_key;
    if(apiKey==='rovcode-01'){
        next();
    }else{
        res.status( 403 );
        res.send( {error: "api key incorrect"} ); 
    }
   
  }catch( e ){
    res.status( 403 );
    res.send( {error: "Error en el customHeader"});
  }

}

module.exports = customHeader; 