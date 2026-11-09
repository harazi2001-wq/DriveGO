
const express = require("express");
const router = express.Router();

const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2024,
    pricePerDay: 180,
    available: true
  },
  {
    id: 2,
    brand: "Hyundai",
    model: "i20",
    year: 2023,
    pricePerDay: 140,
    available: true
  },
  {
    id: 3,
    brand: "BMW",
    model: "320i",
    year: 2025,
    pricePerDay: 450,
    available: false
  }
];

// GET all cars
router.get("/", (req, res) => {
  res.json(cars);
});

// GET available cars
router.get("/available", (req, res) => {
  const availableCars = cars.filter(
    car => car.available === true
  );

  res.json(availableCars);
});

module.exports = router;
