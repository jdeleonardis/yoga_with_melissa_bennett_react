const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classesSchema = new Schema({
  title: {type: String, required: true},
  dateStart: { type: Date, required: true },
  dateEnd: { type: Date },
  location:  [
        {
          type: Schema.Types.ObjectId,
          ref: "Locations"
        }
  ],
  maxParticipants: { type: Number},
  names: { type: Array },
  emailAddresses: { type: Array},
  cancelled: { type: Boolean, required: true, default: false}
});

const Classes = mongoose.model("Classes", classesSchema);

module.exports = Classes;