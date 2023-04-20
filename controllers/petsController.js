const Pet = require("../models/Pet");
const User = require("../models/User");

const create = async (req, res) => {
  console.log("1: " + req.body.User_ID);
  try {
    const createdPet = await Pet.create(req.body);
    // const findUser = await User.find
    res.status(200).send(createdPet);
    console.log("2: " + req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const index = async (req, res) => {
  try {
    const foundPet = await Pet.find({});
    res.status(200).send(foundPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const deletePet = async (req, res) => {
//   try {
//     const deletedPet = await Pet.findByIdAndRemove(req.params.id);
//     res.status(200).send(deletedPet);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const show = async (req, res) => {
//   try {
//     const Pet = await Pet.findById(req.params.id);
//     res.status(200).send(pet);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const update = async (req, res) => {
//   try {
//     const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.status(200).send(updatedPet);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
module.exports = {
  create,
  index,
  // delete: deletePet,
  // show,
  // update,
};
