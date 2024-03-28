const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Middleware to log requests
app.use(morgan('combined'));

// Middleware to parse JSON bodies
app.use(express.json());

// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Route to simulate an error
app.get('/error', (req, res, next) => {
  next(new Error('Intentional error'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
