// Import express
import express from "express";
import { spawn } from 'child_process';



const app = express();

// Define the port number
const port = 5001;

// Middleware to parse JSON requests
app.use(express.json());








// Start the Java CLI process
const javaCLI = spawn('java', ['-jar', '../CLI-java/new/out/artifacts/new_jar/new.jar']);

// Listen for output from the Java CLI
javaCLI.stdout.on('data', (data) => {
  console.log(`Java CLI output: ${data}`);
  // You can process this real-time data or send it to the frontend
});

// Handle errors from the Java CLI
javaCLI.stderr.on('data', (data) => {
  console.error(`Error from Java CLI: ${data}`);
});

// Detect when the Java CLI process exits
javaCLI.on('close', (code) => {
  console.log(`Java CLI process exited with code ${code}`);
});




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
