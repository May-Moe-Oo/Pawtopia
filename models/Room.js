const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomImageUrl: {
    type: String,
    required: true,
  },

  roomName: {
    type: String,
    required: true,
  },

  roomMaxGuest: {
    type: String,
    enum: ["1", "2", "3"],
    default: "1",
    required: true,
  },

  roomType: {
    type: String,
    enum: ["Studio", "Shared"],
    required: true,
  },

  roomSize: {
    type: String,
    enum: ["2.5 square meter ", "3.5 square meter", "4.5 square meter"],
    required: true,
  },

  roomPrice: {
    type: Number,
    min: 10,
  },

  roomCheckIn: {
    type: String,
  },

  roomCheckOut: {
    type: String,
    required: true,
  },

  roomPackageInfo: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;