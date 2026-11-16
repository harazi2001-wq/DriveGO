

# DriveGO - Car Rental API

## Project Description
DriveGO is a car rental management system developed
using Node.js and Express.js.

The system provides REST API endpoints for managing
cars and rental bookings.

## Technologies
- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- Git & GitHub

## Project Structure

DriveGO/
├── app.js
├── package.json
├── routes/
│   ├── cars.js
│   └── bookings.js
└── controllers/
    ├── carsController.js
    └── bookingsController.js

## API Endpoints

### Cars
GET /api/cars
GET /api/cars/available
GET /api/cars/search?q=Toyota
GET /api/cars/:id
POST /api/cars
PUT /api/cars/:id
DELETE /api/cars/:id

### Bookings
GET /api/bookings
GET /api/bookings/summary
GET /api/bookings/search?q=Daniel
GET /api/bookings/:id
POST /api/bookings
PUT /api/bookings/:id
DELETE /api/bookings/:id

## How to Run

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

   npm install

4. Start the server:

   node app.js

5. Open in your browser:

   http://localhost:3000

## Exercise 2 - Controllers
The project uses separate Controllers and Routes.

Routes define API endpoints.
Controllers handle HTTP requests and return JSON responses.

The API supports:
- Retrieving data
- Searching
- Creating records
- Updating records
- Deleting records

## Notes

- The data is stored in JavaScript arrays in memory, not in a database.
- The project is an API, not a graphical web interface. Responses are JSON.
- `node_modules/` is intentionally excluded. Running `npm install` restores the dependencies.
