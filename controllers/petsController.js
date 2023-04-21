const Pet = require("../models/Pet");
const User = require("../models/User");
//! create new pet
const create = async (req, res) => {
  // console.log("1: add " + req.body.User_ID);
  try {
    const createdPet = await Pet.create(req.body);
    res.status(200).send(createdPet);
    // console.log("2: " + req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//! show pet at pet page WIP
const index1 = async (req, res) => {
  console.log("1: index " + req.body.User_ID);
  try {
    const foundPet = await Pet.find({ User_ID: req.params.userId });
    res.status(200).send(foundPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const index = async (req, res) => {
  console.log("1: index " + req.body.User_ID);
  try {
    const foundPet = await Pet.find({});
    res.status(200).send(foundPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//! delete the pet WIP
const deletePet = async (req, res) => {
  // console.log("1: Del " + req.body.User_ID);
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedPet);
    console.log("This pet has been deleted" + deletedPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//! show find by ID, pet info WIP
const show = async (req, res) => {
  // console.log("1: show " + req.body.User_ID);
  try {
    const showPet = await Pet.findById(req.params.id);
    console.log("Pet infor is " + showPet);
    res.status(200).send(showPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//! edit and update the pet WIP
const update = async (req, res) => {
  // console.log("1: update " + req.body.User_ID);
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(updatedPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  index,
  delete: deletePet,
  show,
  update,
};
