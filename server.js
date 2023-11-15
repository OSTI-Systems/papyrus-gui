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



const net = require('net');

// Replace these values with your server's address and port
const serverAddress = '192.168.1.47';
const serverPort = 1026;

// Create a TCP socket
const client = net.createConnection({ host: serverAddress, port: serverPort }, () => {
    console.log('Connected to the server!');

    // Send a message to the server
    const message = 'Hello, Server! This is a TCP packet.';
    client.write(message);
});

// Handle data received from the server
client.on('data', (data) => {
    console.log('Received from server:', data.toString());
    // Close the connection after receiving a response (optional)
    client.end();
});

// Handle connection closure
client.on('end', () => {
    console.log('Connection to the server closed.');
});

// Handle errors
client.on('error', (err) => {
    console.error('Error:', err.message);
});

// Handle connection termination
client.on('close', () => {
    console.log('Connection closed.');
});
