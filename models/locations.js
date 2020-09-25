const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationsSchema = new Schema({
  name: { type: String, required: true },
  addr1: { type: String, required: true },
  addr2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  zipLocal: { type: String },
  active: { type: String, required: true, default: false }
});

const Locations = mongoose.model("Locations", locationsSchema);

module.exports = Locations;