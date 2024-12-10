import WebSocket, { WebSocketServer }  from "ws";

export function reactWebSocket() {
const wss = new WebSocketServer({ port: 8082 });

wss.on('connection', (ws) => {
  console.log('A new client connected');

  ws.send('Hello from the server!');

  ws.on('message', (message) => {
    console.log('Received: ' + message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

}