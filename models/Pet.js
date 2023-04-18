const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  petUrl: {
    type: String,
    required: true,
  },

  petName: {
    type: String,
    required: true,
  },

  petGender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },

  petAge: {
    type: String,
    required: true,
  },

  petBreed: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pet", petSchema);
