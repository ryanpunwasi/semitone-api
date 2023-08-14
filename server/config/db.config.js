// Database connections
const { Pool } = require("pg");

const { DB_URL } = process.env;

const pool = new Pool({
  connectionString: `${DB_URL}?sslmode=require`,
});

pool
  .connect()
  .then(() => {
    console.log("Database connection established.");
  })
  .catch(e => {
    throw new Error(e);
  });

module.exports = pool;
