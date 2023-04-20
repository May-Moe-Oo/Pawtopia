const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roomName: [
    {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
  bookingStartDate: {
    type: date,
    required: true,
  },
  bookingEndDate: {
    type: date,
    required: true,
  },
  petName: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],

  remarks: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
