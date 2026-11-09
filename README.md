# DriveGO – Car Rental API

A simple Node.js + Express REST API project for a car rental system.

## Requirements

- Node.js (version 18 or later recommended)
- npm

## Run locally

1. Open a terminal in the project folder (the folder containing `package.json`).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open the API in your browser: <http://localhost:3000>

## API routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | API welcome message |
| GET | `/api/cars` | List all cars |
| GET | `/api/cars/available` | List available cars |
| GET | `/api/bookings` | List bookings |
| GET | `/api/bookings/summary` | Show booking counts by status |

### Example URLs

- <http://localhost:3000/api/cars>
- <http://localhost:3000/api/cars/available>
- <http://localhost:3000/api/bookings>
- <http://localhost:3000/api/bookings/summary>

## Notes

- The data is stored in JavaScript arrays in memory, not in a database.
- The project is an API, not a graphical web interface. Responses are JSON.
- `node_modules/` is intentionally excluded. Running `npm install` restores the dependencies.
