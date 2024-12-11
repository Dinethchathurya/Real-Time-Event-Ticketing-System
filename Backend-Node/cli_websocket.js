import WebSocket, { WebSocketServer } from "ws";
let wss = new WebSocketServer({ port: 8082 });

export function connectWebSocket() {
   createReactWebSocket();

  const ws = new WebSocket("ws://localhost:8081");

  ws.on("open", function open() {
    console.log("Connected to Java WebSocket server");
  });

  ws.on("message", function incoming(data) {
    senddatatoreactfrontend(data);
    console.log(`Received from Java CLI websocket: ${data}`);
  });

  ws.on("error", function error(err) {
    console.error(`WebSocket error: ${err}`);
  });

  ws.on("close", function close() {
    console.log("WebSocket connection closed");
    setTimeout(connectWebSocket, 5000);
  });
}

function createReactWebSocket() {
  wss.on("connection", (ws) => {
    console.log("A new client connected");
    ws.send("Hello from the Node server!");
    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
}

function senddatatoreactfrontend(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data); 
      console.log("Data sent to React client: " + data);
    }
  });
}
