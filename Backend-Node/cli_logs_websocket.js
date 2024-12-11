import { WebSocketServer }  from "ws";

let cli_logs_websocket = new WebSocketServer({ port: 8083 });
// this websocket for send data to react front end (CLI logs )


export function createConnectionCliLogsWebsocket() {
    cli_logs_websocket.on("connection", (ws) => {
      console.log("A new client connected");
      ws.send("Hello from the Node server!");
      ws.on("close", () => {
        console.log("Client disconnected");
      });
    });
  }
  
  export function sendCliLogsWebsocket(data) {
    cli_logs_websocket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data); 
        console.log("Data sent to React client: " + data);
      }
    });
  }