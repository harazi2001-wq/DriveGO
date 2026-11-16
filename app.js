
const express = require("express");
const app = express();

const carsRoutes = require("./routes/cars");
const bookingsRoutes = require("./routes/bookings");

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Drive GO Car Rental API"
  });
});

app.use("/api/cars", carsRoutes);
app.use("/api/bookings", bookingsRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Drive GO is running on http://localhost:${PORT}`);
});
