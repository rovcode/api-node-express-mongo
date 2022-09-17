const {  DataTypes } = require("sequelize");
const {sequelize} = require("../../config/mysql");

const users = sequelize.define("users",{
    name: { type: String },
    fechaNac:  { type: Date},
    email: { type: String, unique: true },
    password: { type: String},
    role: { type: ["Usuario", "Admin", "Bodeguero"], default: "Usuario" },
},
{
    timestamps: true,
});
module.exports = users;
