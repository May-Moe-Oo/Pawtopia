const bookingsController = require("../controllers/bookingsController");
const express = require("express");
const router = express.Router();

// ("/api/bookings")

// router.get("/userBookings", bookingsController.displayBookings); //
router.get("/:id/guestPet", bookingsController.getpets); // get pet for bookings form
router.post("/bookingForm", bookingsController.createBooking); //! create new booking
module.exports = router;
