const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  petImageUrl: {
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

  petBreed: {
    type: String,
    required: true,
  },

  User_ID: {
    type: Schema.Types.ObjectId, 
    ref: "User",
  },
});

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;
