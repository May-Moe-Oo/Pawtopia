const Booking = require("../models/Booking");
const Pet = require("../models/Pet");
const User = require("../models/User");
const Room = require("../models/Room");

const getpets = async (req, res) => {

  try {
    const { id } = req.params;
    const pets = await Pet.find({ User_ID: id });
    res.status(201).json(pets);
    console.log(pets);
  } catch {
    res.status(500).json(error);
  }
};
module.exports = {
  getpets,
};
