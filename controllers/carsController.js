
let cars = [
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

const getAllCars = (req, res) => {
  res.json(cars);
};

const getAvailableCars = (req, res) => {
  const availableCars = cars.filter(
    car => car.available === true
  );
  res.json(availableCars);
};

const searchCars = (req, res) => {
  const q = String(req.query.q || "").toLowerCase();

  const results = cars.filter(car =>
    `${car.brand} ${car.model}`.toLowerCase().includes(q)
  );

  res.json(results);
};

const getCarById = (req, res) => {
  const car = cars.find(
    car => car.id === Number(req.params.id)
  );

  if (!car) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.json(car);
};

const addCar = (req, res) => {
  const { brand, model, year, pricePerDay, available } = req.body;
  const price = Number(pricePerDay);

  if (!brand || !model || !Number.isFinite(price) || price <= 0) {
    return res.status(400).json({ error: "Invalid car details" });
  }

  const newCar = {
    id: Math.max(0, ...cars.map(car => car.id)) + 1,
    brand,
    model,
    year,
    pricePerDay: price,
    available: available ?? true
  };

  cars.push(newCar);
  res.status(201).json(newCar);
};

const updateCar = (req, res) => {
  const car = cars.find(
    car => car.id === Number(req.params.id)
  );

  if (!car) {
    return res.status(404).json({ error: "Car not found" });
  }

  const { id, ...updates } = req.body;
  Object.assign(car, updates);

  res.json(car);
};

const deleteCar = (req, res) => {
  const id = Number(req.params.id);
  const car = cars.find(car => car.id === id);

  if (!car) {
    return res.status(404).json({ error: "Car not found" });
  }

  cars = cars.filter(car => car.id !== id);
  res.json({ message: "Car deleted", car });
};

module.exports = {
  getAllCars,
  getAvailableCars,
  searchCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar
};
