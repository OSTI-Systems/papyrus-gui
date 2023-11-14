const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json()); // Parse JSON-encoded bodies

// Placeholder backend functions for each of the buttons
app.post('/button1', (req, res) => {
  console.log('button1');
  res.end();
});

app.post('/button2', (req, res) => {
  console.log('button2');
  res.end();
});

app.post('/button3', (req, res) => {
  console.log('button3');
  res.end();
});

app.post('/button4', (req, res) => {
  console.log('button4');
  res.end();
});

app.post('/button5', (req, res) => {
  console.log('button5');
  res.end();
});

// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
