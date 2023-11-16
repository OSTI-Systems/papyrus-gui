const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json()); // Parse JSON-encoded bodies

const net = require('net');
const { Socket } = require('dgram');

// Replace these values with your server's address and port
const serverAddress = '10.10.10.20';
const serverPort = 3141;

let client = new net.Socket();
let connected = false;

// Placeholder backend functions for each of the buttons
app.post('/button1', (req, res) => {
  console.log('button1');
  const client = net.createConnection(serverPort, serverAddress, () => {
    client.write('Mission 1');
    client.destroySoon();
    client.on('error', (error) => {
      console.error(error);
    });
    client.on('close', () => {
      console.log('Disconnected from server');
    });
  });
  res.end();
});

app.post('/button2', (req, res) => {
  console.log('button2');
  const client = net.createConnection(serverPort, serverAddress, () => {
    client.write('Mission 2');
    client.destroySoon();
    client.on('error', (error) => {
      console.error(error);
    });
    client.on('close', () => {
      console.log('Disconnected from server');
    });
  });
  res.end();
});

app.post('/button3', (req, res) => {
  console.log('button3');
  const client = net.createConnection(serverPort, serverAddress, () => {
    client.write('Mission 3');
    client.destroySoon();
    client.on('error', (error) => {
      console.error(error);
    });
    client.on('close', () => {
      console.log('Disconnected from server');
    });
  });
  res.end();
});

app.post('/button4', (req, res) => {
  console.log('button4');
  const client = net.createConnection(serverPort, serverAddress, () => {
    client.write('Mission 4');
    client.destroySoon();
    client.on('error', (error) => {
      console.error(error);
    });
    client.on('close', () => {
      console.log('Disconnected from server');
    });
  });
  res.end();
});

app.post('/button5', (req, res) => {
  console.log('button5');
  const client = net.createConnection(serverPort, serverAddress, () => {
    client.write('Mission 5');
    client.destroySoon();
    client.on('error', (error) => {
      console.error(error);
    });
    client.on('close', () => {
      console.log('Disconnected from server');
    });
  });
  res.end();
});

// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

/*
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
*/
