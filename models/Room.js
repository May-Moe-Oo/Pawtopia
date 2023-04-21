const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomImageUrl: {
    type: String,
    required: true,
  },

  roomName: {
    type: String,
    enum: ["Standard Suite", "Dreamy Suite", "Presidential Suite"],
    required: true,
  },

  roomSize: {
    type: String,
    enum: ["3 square meter ", "4.5 square meter", "6 square meter"],
    required: true,
  },

  roomPrice: {
    type: Number,
    required: true,
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