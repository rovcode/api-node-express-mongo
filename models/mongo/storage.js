const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const StorageCheme = new mongoose.Schema(
  {
    url: { type: String },
    filename: { type: String },
  },
  {
    timestamps:true,
    versionKey: false
  }
);
StorageCheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storage", StorageCheme)
