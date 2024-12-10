import WebSocket from "ws";

export function connectWebSocket() {
  const ws = new WebSocket("ws://localhost:8081");

  ws.on("open", function open() {
    console.log("Connected to Java WebSocket server");
  });

  ws.on("message", function incoming(data) {
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
