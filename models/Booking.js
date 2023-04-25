const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  usersName: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roomsName: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },

  bookingStartDate: {
    type: Date,
    required: true,
    min: new Date(),
  },

  bookingEndDate: {
    type: Date,
    required: true,
    min: new Date(),
  },

  petsName: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
    required: true,
  },

  remarks: {
    type: String,
    trim: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
