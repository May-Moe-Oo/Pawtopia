const Room = require("../models/Room");

//! Index to show map rooms at room page WIP
const index = async (req, res) => {
  try {
    const getRooms = await Room.find({});
    console.log("Rooms are " + getRooms);
    res.status(200).send(getRooms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//! show and find each room by ID, room info page WIP
const show = async (req, res) => {
  // console.log("1: show " + req.body.User_ID);
  try {
    const showRoom = await Room.findById(req.params.id);
    console.log("Each room infor is " + showRoom);
    res.status(200).send(showRoom);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  index,
  show,
};
