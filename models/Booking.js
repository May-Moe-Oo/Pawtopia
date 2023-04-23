const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  usersName: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roomsName: [
    {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
  ],

  bookingStartDate: {
    type: Date,
    required: true,
  },

  bookingEndDate: {
    type: Date,
    required: true,
  },

  petsName: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],

  remarks: {
    type: String,
    trim: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
