


// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// });

// pool
//   .connect()
//   .then(() => console.log("PostgreSQL connected"))
//   .catch((err) => console.error("Error connecting to PostgreSQL", err));

// module.exports = pool;


// const { Pool } = require('pg');

// const pool = new Pool({
//   user: process.env.DB_USER || 'yourusername',
//   host: process.env.DB_HOST || 'localhost',
//   database: process.env.DB_NAME || 'yourdatabase',
//   password: process.env.DB_PASSWORD || 'yourpassword',
//   port: process.env.DB_PORT || 8081,
// });

// module.exports = pool;


const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Your database username
  host: 'localhost',
  database: 'sports_sessions', // Your database name
  password: 'sindhu', // Your database password
  port: 8081, // Ensure this matches the port your PostgreSQL server is using
});

module.exports = pool;
