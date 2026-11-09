
const express = require("express");
const router = express.Router();

const bookings = [
  {
    id: 101,
    carId: 3,
    customerName: "Daniel",
    startDate: "2026-11-05",
    endDate: "2026-11-08",
    status: "active"
  },
  {
    id: 102,
    carId: 1,
    customerName: "Noa",
    startDate: "2026-10-10",
    endDate: "2026-10-12",
    status: "completed"
  }
];

// GET all bookings
router.get("/", (req, res) => {
  res.json(bookings);
});

// GET bookings summary
router.get("/summary", (req, res) => {
  const totalBookings = bookings.length;

  const activeBookings = bookings.filter(
    booking => booking.status === "active"
  ).length;

  const completedBookings = bookings.filter(
    booking => booking.status === "completed"
  ).length;

  res.json({
    totalBookings,
    activeBookings,
    completedBookings
  });
});

module.exports = router;
