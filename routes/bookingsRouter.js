const bookingsController = require("../controllers/bookingsController");
const express = require("express");
const router = express.Router();

// ("/api/bookings")
router.get("/:id/guestPet", bookingsController.getpets); // get pet for bookings form
router.get("/:id/selectedRoom", bookingsController.getRooms); // get selected room for bookings form

router.post("/bookingForm", bookingsController.createBooking); //! create new booking
router.get("/:id/MyBookings", bookingsController.displayUserBookings); //! show bookings made by user MyBookings page

module.exports = router;
