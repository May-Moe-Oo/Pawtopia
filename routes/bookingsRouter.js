const bookingsController = require("../controllers/bookingsController");
const express = require("express");
const router = express.Router();

// ("/api/bookings")
// router.post("/bookingForm", bookingsController.createBooking); //! create new booking
// router.get("/userBookings", bookingsController.displayBookings); //
router.get("/:id/guestPet", bookingsController.getpets); // get pet for bookings form

module.exports = router;
