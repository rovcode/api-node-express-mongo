const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");
const Storage = require("./storage")
const tracks = sequelize.define(
  "tracks",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
    artist_name: {
      type: DataTypes.STRING,
    },
    artist_nickname: {
      type: DataTypes.STRING,
    },
    artist_nationality: {
      type: DataTypes.STRING,
    },
    duration_start: {
      type: DataTypes.INTEGER,
    },
    duration_end: {
      type: DataTypes.INTEGER,
    },
    mediaId: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
/**
 *  custom model implementation
 */
 tracks.findAllData = function() {
  tracks.belongsTo(Storage, {
    foreignKey: "mediaId",
    as: "audio",
  })
  return tracks.findAll({include:"audio"})
 }
 /**
  * 
  * @param {*} id 
  * @returns joinData for one register
  */
 tracks.findOneData = function(id) {
  tracks.belongsTo(Storage, {
    foreignKey: "mediaId",
    as: "audio",
  })
  return tracks.findAll({where:{id},include:"audio"})
 }

module.exports = tracks;
