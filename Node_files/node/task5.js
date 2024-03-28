const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample data (users)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) an existing user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  users = users.map(user => {
    if (user.id === userId) {
      return { ...user, ...updatedUser };
    }
    return user;
  });
  res.json({ message: 'User updated successfully' });
});

// DELETE a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
