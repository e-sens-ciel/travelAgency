const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'adlan123',
  database: 'travel',
};

const pool = mysql.createPool(dbConfig);

app.get('/', (req, res) => {
  res.send('Welcome to my server');
});

app.post('/api/register', async (req, res) => {
  console.log('Received registration request:', req.body);
  const { email, password, lastName, firstName, birthDate, phoneNumber, address, country, city } = req.body;

  pool.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).send('Internal Server Error');
    }
    if (results.length > 0) {
      return res.status(400).send('User already exists');
    }
    const insertQuery = 'INSERT INTO users (Email, Password, LastName, FirstName, BirthDate, PhoneNumber, Address, Country, City) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    pool.query(insertQuery, [email, password, lastName, firstName, birthDate, phoneNumber, address, country, city], (error) => {
      if (error) {
        console.error('Error inserting user into the database:', error);
        return res.status(500).send('Internal Server Error');
      }
      res.status(201).send('User created');
    });
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  pool.query('SELECT * FROM users WHERE Email = ?', [email], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).send('Internal Server Error');
    }
    if (results.length > 0) {
      const user = results[0];
      if (password === user.password) {
        const { password, ...userData } = user;
        return res.status(200).json(userData);
      } else {
        return res.status(400).send('Invalid email or password');
      }
    } else {
      return res.status(400).send('Invalid email or password');
    }
  });
});

app.get('/api/hotels', (req, res) => {
  pool.query('SELECT * FROM hotel', (err, results) => {
    if (err) {
      console.error('Error querying the database for hotels:', err);
      return res.status(500).send('Internal Server Error');
    }
    const hotels = results.map(hotel => ({
      ...hotel,
      ArrivalDate: hotel.ArrivalDate.toISOString().substring(0, 10), 
      DepartureDate: hotel.DepartureDate.toISOString().substring(0, 10),
    }));
    res.json(hotels);
  });
});


app.post('/api/reservations', (req, res) => {
  const { userId, hotelId, name, email, phoneNumber, arrivalDate, departureDate } = req.body;

  const insertQuery = 'INSERT INTO reservations (UserID, HotelID, Name, Email, PhoneNumber, ArrivalDate, DepartureDate) VALUES (?, ?, ?, ?, ?, ?, ?)';

  pool.query(insertQuery, [userId, hotelId, name, email, phoneNumber, arrivalDate, departureDate], (error, results) => {
    if (error) {
      console.error('Error inserting reservation into the database:', error);
      return res.status(500).send('Internal Server Error');
    }
    res.status(201).send({ reservationId: results.insertId, message: 'Reservation created successfully.' });
  });
});

app.get('/api/reservations/user/:userId', (req, res) => {
  const userId = req.params.userId;

  const query = `
      SELECT r.ReservationID, r.ArrivalDate, r.DepartureDate, r.Name, r.Email, r.PhoneNumber, h.Name AS HotelName, h.ImageURL, h.Price
      FROM reservations r
      INNER JOIN hotel h ON r.HotelID = h.HotelID
      WHERE r.UserID = ?
  `;

  pool.query(query, [userId], (err, results) => {
      if (err) {
          console.error('Error querying the database:', err);
          return res.status(500).send('Internal Server Error');
      }
      res.json(results);
  });
});


const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});