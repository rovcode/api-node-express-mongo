const bcryptjs = require("bcryptjs");
const encrypt = async (passPlain) => { 
    const hash = await bcryptjs.hash(passPlain,10);
    return hash;
};
const compara = async (passPlain, hash) => {
 const state= await bcryptjs.compare(passPlain, hash);
 return "Este:"+state+" llega:"+hash+passPlain;
};
module.exports = { encrypt, compara };