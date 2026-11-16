
let bookings = [
  {
    id: 1,
    carId: 1,
    customerName: "Daniel",
    status: "active"
  },
  {
    id: 2,
    carId: 2,
    customerName: "Noa",
    status: "completed"
  }
];

const getAllBookings = (req, res) => {
  res.json(bookings);
};

const getBookingsSummary = (req, res) => {
  res.json({
    total: bookings.length,
    active: bookings.filter(b => b.status === "active").length,
    completed: bookings.filter(b => b.status === "completed").length
  });
};

const searchBookings = (req, res) => {
  const q = String(req.query.q || "").toLowerCase();

  const results = bookings.filter(b =>
    `${b.customerName} ${b.status}`.toLowerCase().includes(q)
  );

  res.json(results);
};

const getBookingById = (req, res) => {
  const booking = bookings.find(
    b => b.id === Number(req.params.id)
  );

  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }

  res.json(booking);
};

const addBooking = (req, res) => {
  const { carId, customerName, status } = req.body;

  if (!Number.isInteger(Number(carId)) ||
      Number(carId) <= 0 ||
      !customerName) {
    return res.status(400).json({ error: "Invalid booking details" });
  }

  const newBooking = {
    id: Math.max(0, ...bookings.map(b => b.id)) + 1,
    carId: Number(carId),
    customerName,
    status: status || "active"
  };

  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

const updateBooking = (req, res) => {
  const booking = bookings.find(
    b => b.id === Number(req.params.id)
  );

  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }

  const { id, ...updates } = req.body;
  Object.assign(booking, updates);

  res.json(booking);
};

const deleteBooking = (req, res) => {
  const id = Number(req.params.id);
  const booking = bookings.find(b => b.id === id);

  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }

  bookings = bookings.filter(b => b.id !== id);
  res.json({ message: "Booking deleted", booking });
};

module.exports = {
  getAllBookings,
  getBookingsSummary,
  searchBookings,
  getBookingById,
  addBooking,
  updateBooking,
  deleteBooking
};
