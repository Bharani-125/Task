const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

// Route to handle POST requests
app.post('/', (req, res) => {
  const { message } = req.body;
  res.send(`Received a POST request with message: ${message}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
