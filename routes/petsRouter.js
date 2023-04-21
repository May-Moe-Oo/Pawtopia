const express = require("express");
// const usersController = require("../controllers/usersController");
const petsController = require("../controllers/petsController");
const router = express.Router();

//? embedded petsSchema inside usersSchema ("/api/users")
// router.post("/users/:id/pets", petsController.create); //! create new pet
// router.get("/", petsController.index); //! show new pet at users/:id/pet page

//! ("/api/pets")
router.post("/", petsController.create); //! create new pet
router.get("/:userId", petsController.index); //! show pet at pet page
router.get("/:id", petsController.show); //! show find by ID
router.delete("/:id", petsController.delete); //! delete the pet
router.put("/:id", petsController.update); //! edit and update the pet
module.exports = router;
