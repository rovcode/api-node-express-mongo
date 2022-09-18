const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const users = sequelize.define(
  "users",
  {
    name: {
         type: DataTypes.STRING,
         allowNull: false, 
        },
    email: { 
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: { 
        type: DataTypes.ENUM(["Usuario", "Admin"])
    },
    fechaNac: { 
        type: DataTypes.DATE, 
    },
  },
  {
    timestamps: true,
  }
);
module.exports = users;
