const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'your_secret_key'; // Replace with your secret key

// Sample user data (for demonstration purposes)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Authentication endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, secretKey);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
};

// Protected route example
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.userId });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
