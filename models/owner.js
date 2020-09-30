const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  userid: { type: String, required: true },
  password: { type: String, required: true }
});

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;