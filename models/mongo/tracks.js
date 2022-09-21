const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const TracksScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

/**
 * Implementar metodo propio con relacion a storage
 */
TracksScheme.statics.findAllData = function () {
  const midata = this.aggregate([
    {
      $lookup: {
        from: 'storages', 
        localField: 'mediaId', 
        foreignField: '_id', 
        as: "audio",
      },
      
    },
    {
      $unwind: '$audio',
    }
  ]);
  return midata;
};
/**
 * @param {id}, send the id of tracks for join to storages
 * @returns  returns joinData from storages for the given id 
 */
TracksScheme.statics.findOneData = function (id) {
  const midata = this.aggregate([
    {
      $lookup: {
        from: 'storages', 
        localField: 'mediaId', 
        foreignField: '_id', 
        as: "audio",
      },
      
    },
    {
      $unwind: '$audio',
    },
    {
       $match:{
        _id:mongoose.Types.ObjectId(id)
       }

    }
  ]);
  return midata;
};

/**
 * 
 * @param {*} id 
 * @returns get value from TracksScheme for the given id
 */
TracksScheme.statics.findOneData = function (id) {
  const joinData = this.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "storages", //TODO Tracks --> storages
        localField: "mediaId", //TODO Tracks.mediaId
        foreignField: "_id", //TODO Straoges._id
        as: "audio", //TODO Alias!
      },
    },
  ]);
  return joinData;
};

TracksScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("tracks", TracksScheme);
