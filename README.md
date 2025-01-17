# Sports Session Management Application

## Description
This application is designed to manage sports sessions for players and admins. Players can join, create, and cancel sessions with a reason that is visible to admins. Admins can view all sessions, including cancelled sessions, and generate reports based on configurable time periods.

## Features
- **Player Dashboard**: 
  - View available sports and sessions.
  - Join sessions.
  - Create sessions.
  - Cancel sessions with a reason.
- **Admin Dashboard**: 
  - View all sports and sessions.
  - View cancelled sessions with reasons.
  - Create sports and sessions.
  - Generate reports for sessions and sports popularity within a configurable time period.
- **Reports**:
  - Generate reports for sessions within a specified time range.
  - View sports popularity based on the number of sessions.

## Installation
1. Clone the repository:
   git clone <repository-url>
Navigate to the project directory:

cd sports-session-management
Install dependencies:

npm install
Configuration
Create a .env file in the project root directory and add the following environment variables:

DB_USER=<your_database_user>
DB_HOST=<your_database_host>
DB_DATABASE=<your_database_name>
DB_PASSWORD=<your_database_password>
DB_PORT=<your_database_port>
SESSION_SECRET=<your_session_secret>
Set up the PostgreSQL database with the required tables:

sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE sports (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    sport_id INTEGER REFERENCES sports(id),
    team1 VARCHAR(255) NOT NULL,
    team2 VARCHAR(255) NOT NULL,
    venue VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    creator_id INTEGER REFERENCES users(id),
    cancelled BOOLEAN DEFAULT FALSE,
    cancellation_reason TEXT
);

CREATE TABLE session_players (
    session_id INTEGER REFERENCES sessions(id),
    player_id INTEGER REFERENCES users(id),
    PRIMARY KEY (session_id, player_id)
);
Running the Application
Start the server:

node index.js
Open your browser and navigate to http://localhost:3000.

Usage
Player Dashboard
Sports Section: View available sports.

Available Sessions Section: View and join available sessions.

My Sessions Section: View and manage sessions created by the player.

Create Session Section: Create new sessions.

Cancel Session: Provide a reason to cancel a session.

Admin Dashboard
Sports Section: View and manage sports.

All Sessions Section: View all sessions, including those created by other players.

Cancelled Sessions Section: View cancelled sessions and their reasons.

Create Session Section: Create new sessions.

Generate Reports: Navigate to the reports page to generate session and sports popularity reports.

Reports
Configure Time Period Section: Set the start and end date for the report.

Sessions Report Section: View sessions within the specified time period.

Sports Popularity Report Section: View sports popularity based on the number of sessions.

Troubleshooting
If you encounter any issues, check the server logs for error messages and ensure your database is correctly configured.

License
This project is licensed under the MIT License.
