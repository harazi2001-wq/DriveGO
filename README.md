# DriveGO – Car Rental API

## Project Description

DriveGO is a car rental management system developed using Node.js and Express.js.

The system allows users to view available cars, search for vehicles, and manage car rental bookings through a REST API.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- JSON

## API Endpoints

### Cars API

| HTTP Method | API Endpoint | Controller Function | Description |
|---|---|---|---|
| GET | `/api/cars` | `carsController.getAllCars` | Returns all cars |
| GET | `/api/cars/available` | `carsController.getAvailableCars` | Returns available cars |
| GET | `/api/cars/search?q=Toyota` | `carsController.searchCars` | Searches cars by brand or model |
| GET | `/api/cars/:id` | `carsController.getCarById` | Returns a car by ID |
| POST | `/api/cars` | `carsController.addCar` | Adds a new car |
| PUT | `/api/cars/:id` | `carsController.updateCar` | Updates car details |
| DELETE | `/api/cars/:id` | `carsController.deleteCar` | Deletes a car |

### Bookings API

| HTTP Method | API Endpoint | Controller Function | Description |
|---|---|---|---|
| GET | `/api/bookings` | `bookingsController.getAllBookings` | Returns all bookings |
| GET | `/api/bookings/summary` | `bookingsController.getBookingsSummary` | Returns booking statistics |
| GET | `/api/bookings/search?q=Daniel` | `bookingsController.searchBookings` | Searches bookings |
| GET | `/api/bookings/:id` | `bookingsController.getBookingById` | Returns a booking by ID |
| POST | `/api/bookings` | `bookingsController.addBooking` | Creates a new booking |
| PUT | `/api/bookings/:id` | `bookingsController.updateBooking` | Updates a booking |
| DELETE | `/api/bookings/:id` | `bookingsController.deleteBooking` | Deletes a booking |

## Project Structure

- `app.js` – Main Express server
- `routes/cars.js` – Car API routes
- `routes/bookings.js` – Booking API routes
- `controllers/carsController.js` – Car operations
- `controllers/bookingsController.js` – Booking operations
- `package.json` – Project dependencies

## How to Run

1. Clone or download the repository.
2. Open the project folder.
3. Run `npm install` to install dependencies.
4. Run `node app.js` to start the server.
5. Open `http://localhost:3000`.

## Exercise 2 – Controllers

The project separates API routes from controller functions.

Routes define the API endpoints, while controllers handle requests and return JSON responses.

The controllers include functions for retrieving, searching, adding, updating, and deleting cars and bookings.
