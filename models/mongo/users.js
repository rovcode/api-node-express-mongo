const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const UserScheme = new mongoose.Schema(
  {
    name: { type: String },
    fechaNac:  { type: Date, default: Date.now },
    email: { type: String, unique: true },
    passsword: { type: String },
    role: { type: ["Usuario", "Admin", "Bodeguero"], default: "Usuario" },
  },
  {
    timestamps:true,
    versionKey: false
  }
);
UserScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("users", UserScheme);
