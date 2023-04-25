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

const getRooms = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("room req.params is " + req.params);
    // in the Room/booking model, find the room id 
    const findRooms = await Room.find({id});
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
    // console.log("booking body is " + req.body);
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
