const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

app.post('/', (req, res) => {
  const { message } = req.body;
  res.send(`Received a POST request with message: ${message}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
