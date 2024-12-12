import { WebSocketServer }  from "ws";

let reactWebSocket = new WebSocketServer({ port: 8082 });
// for real time data trasver 


export function createReactWebSocket() {
    reactWebSocket.on("connection", (ws) => {
      console.log("A new client connected");
      ws.send("Hello from the Node server!");
      ws.on("close", () => {
        console.log("Client disconnected");
      });
    });
  }
  
  export function senddatatoreactfrontend(data) {
    reactWebSocket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data); 
        console.log("Data sent to React client: " + data);
      }
    });
  }