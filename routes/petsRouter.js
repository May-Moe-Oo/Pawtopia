const express = require("express");
const petsController = require("../controllers/petsController");
const router = express.Router();

// router.post("/", petsController.create); //! create new pet
// router.get("/", petsController.index); //! show artwork at pet page
// router.get("/:id", petsController.show); //! show find by ID
// router.delete("/:id", petsController.delete); //! delete the pet
// router.put("/:id", petsController.update); //! edit and update the pet

module.exports = router;
