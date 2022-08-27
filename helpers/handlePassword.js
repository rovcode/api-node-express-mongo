const bcryptjs = require("bcryptjs");
const encrypt = async (passPlain) => { 
    const hash = await bcryptjs.hash(passPlain,10);
    return hash;
};
const compare = async(passPlain, hash) => {
 return await bcryptjs.compare(passPlain, hash);
};
module.exports = { encrypt, compare };