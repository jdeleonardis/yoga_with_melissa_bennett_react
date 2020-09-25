const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classesSchema = new Schema({
  dateStart: { type: Date, required: true },
  dateEnd: { type: Date },
  location: { type: String },
  maxParticipants: { type: Number},
  names: { type: Array },
  emailAddresses: { type: Array},
  cancelled: { type: Boolean, required: true, default: false}
});

const Classes = mongoose.model("Classes", classesSchema);

module.exports = Classes;