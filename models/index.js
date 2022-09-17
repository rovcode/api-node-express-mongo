const ENGINE_DB = process.env.ENGINE_DB;
//const pathModels = (ENGINE_DB === 'nosql') ? './nosql':'./mysql';
const pathModels = "./mysql";
// if(ENGINE_DB == 'nosql'){
//     pathModels ='./mongo'
// }else{
//     pathModels ='./mysql';
// }
const models = {
    usersModel: require(pathModels+'/users'),
    tracksModel: require(pathModels+'/tracks'),
    storageModel: require(pathModels+'/storage')

};
console.log(ENGINE_DB)
module.exports = models