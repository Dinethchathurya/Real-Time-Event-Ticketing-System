// Import express
import express from "express";
import { spawn } from 'child_process';
import WebSocket from 'ws';


const app = express();

// Define the port number
const port = 5001;

// Middleware to parse JSON requests
app.use(express.json());



const totalTickets = 100;
const ticketReleaseRate = 12;
const customerRetrievalRate = 10;
const maximumTicketCapacity = 100;
const ticketQuantity = 20;

const javaCLI = spawn('java', ['-jar', '../CLI-java/new/out/artifacts/new_jar2/new.jar', totalTickets, ticketReleaseRate, customerRetrievalRate, maximumTicketCapacity, ticketQuantity]);

// Listen for output from the Java CLI
javaCLI.stdout.on('data', (data) => {
    console.log(`Received real-time data from Java CLI: ${data.toString()}`);
    // You can process or forward the real-time data to your frontend or other services here
});

// Handle errors from the Java CLI
javaCLI.stderr.on('data', (data) => {
  console.error(`Error from Java CLI: ${data}`);
});

// Detect when the Java CLI process exits
javaCLI.on('close', (code) => {
  console.log(`Java CLI process exited with code ${code}`);
});





function connectWebSocket() {
  const ws = new WebSocket('ws://localhost:8081');

  ws.on('open', function open() {
    console.log('Connected to Java WebSocket server');
  });

  ws.on('message', function incoming(data) {
    console.log(`Received from Java CLI websocket: ${data}`);
  });

  ws.on('error', function error(err) {
    console.error(`WebSocket error: ${err}`);
  });

  ws.on('close', function close() {
    console.log('WebSocket connection closed');
    setTimeout(connectWebSocket, 5000);
  });
}

connectWebSocket(); // Start the initial connection attempt




// // Connect to the Java WebSocket server
// const ws = new WebSocket('ws://localhost:8081');

//   ws.on('open', function open() {
//     console.log('Connected to Java WebSocket server');
//   });


//   ws.on('message', function incoming(data) {
//     try {
//       console.log(`Received from Java CLI websocket: ${data}`);
//       // Process the data here
//     } catch (error) {
//       console.error(`Error while processing WebSocket message: ${error}`);
//     }
//   });
  

// ws.on('error', function error(err) {
//   console.error(`WebSocket error: ${err}`);
//   console.error(err.stack);
// });

// ws.on('close', function close() {
//   console.log('WebSocket connection closed');
//   //setTimeout(connectWebSocket, 5000);
// });



// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define another route
app.get('/api/example', (req, res) => {
  res.json({
    message: 'This is an example API response.',
    timestamp: new Date()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
