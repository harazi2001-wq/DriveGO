

const express = require("express");
const router = express.Router();

const carsController = require("../controllers/carsController");

router.get("/", carsController.getAllCars);

router.get("/available", carsController.getAvailableCars);

router.get("/search", carsController.searchCars);

router.get("/:id", carsController.getCarById);

router.post("/", carsController.addCar);

router.put("/:id", carsController.updateCar);

router.delete("/:id", carsController.deleteCar);

module.exports = router;
