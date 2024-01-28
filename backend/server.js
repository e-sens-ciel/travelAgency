const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Define your MySQL database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'zouli',
  database: 'travel',
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Middleware for database connection
const dbConnectionMiddleware = (req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.message);
      res.status(500).send('Internal Server Error');
    } else {
      req.mysql = connection;
      next();
    }
  });
};

app.use(dbConnectionMiddleware);

app.get('/', (req, res) => {
  res.send('Welcome to my server');
});

app.post(
  '/api/register',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      // Check for existing user
      const userCheck = await new Promise((resolve, reject) => {
        req.mysql.query(
          'SELECT * FROM user WHERE email = ?',
          [email],
          (err, results) => {
            if (err) reject(err);
            resolve(results);
          }
        );
      });

      if (userCheck.length > 0) {
        return res.status(400).send('User already exists');
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into the database
      await new Promise((resolve, reject) => {
        req.mysql.query(
          'INSERT INTO user (email, password) VALUES (?, ?)',
          [email, hashedPassword],
          (err) => {
            if (err) reject(err);
            resolve();
          }
        );
      });

      res.status(201).send('User created');
    } catch (err) {
      console.error('Error handling registration:', err.message);
      res.status(500).send('Internal Server Error');
    } finally {
      // Release the MySQL connection
      if (req.mysql) {
        req.mysql.release();
      }
    }
  }
);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
