const express = require("express");
// const usersController = require("../controllers/usersController");
const petsController = require("../controllers/petsController");
const router = express.Router();

//! ("/api/pets")
router.post("/", petsController.create); //! create new pet
router.get("/user/:id", petsController.showPetInfo); //! show petinfo by ID
router.get("/:userId", petsController.showUserPet); //! show pet at pet page restricted by user
router.delete("/petDel/:id", petsController.delete); //! delete the pet
router.put("/:id", petsController.update); //! edit and update the pet
module.exports = router;
