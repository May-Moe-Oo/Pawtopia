const roomsController = require("../controllers/roomsController");
const express = require("express");
const router = express.Router();

// ("/api/rooms")
router.get("/", roomsController.index); //! show all rooms
// router.get("/:id", roomsController.show); //! show selected room thats find by ID

