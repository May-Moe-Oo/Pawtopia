const Booking = require("../models/Booking");
const Pet = require("../models/Pet");
const User = require("../models/User");
const Room = require("../models/Room");

// /:id/:name
// const {id, name} = req.params;
// const {name, id} = req.params;

const getpets = async (req, res) => {
  try {
    // {id } = /:id
    const { id } = req.params;
    // {key: value} pair
    const pets = await Pet.find({ User_ID: id });
    res.status(201).json(pets);
    console.log(pets);
  } catch {
    res.status(500).json(error);
  }
};

const getRooms = async (req, res) => {
  try {
    const { id } = req.params;
    // in the Room model, find the room id
    // findById auto key, so need value only (id).
    const findRooms = await Room.findById(id);
    res.status(201).json(findRooms);
    console.log(findRooms);
  } catch {
    res.status(500).json(error);
  }
};

const createBooking = async (req, res) => {
  try {
    const roomBooking = await Booking.create(req.body);
    res.status(200).send(roomBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const displayUserBookings = async (req, res) => {
  try {
    const { id } = req.params;
    // in booking model, find user id to find the user name, room name and pet name.
    const findBookings = await Booking.find({ usersName: id })
      .populate("usersName")
      .populate("roomsName")
      .populate("petsName")
      .exec();

    res.status(200).send(findBookings);
    console.log("Controller User's Booking data are " + findBookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getpets,
  getRooms,
  createBooking,
  displayUserBookings,
};
