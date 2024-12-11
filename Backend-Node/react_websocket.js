import WebSocket, { WebSocketServer }  from "ws";

let wss = new WebSocketServer({ port: 8082 });

export function createReactWebSocket() {

    wss.on('open', function open() {
        ws.send('something');
      });
      
// wss.on('connection', (ws) => {
//     console.log('A new client connected');

//     ws.send('Hello from the Node server!');

//     ws.on('message', (message) => {
//         console.log('Received: ' + message);
//     });
//     ws.on('connection', (ws) => {
//         ws.send(message);
//     });
//     setInterval(() => {
//       const message = `Message sent at ${new Date().toISOString()}`;
//       ws.send(message);
//       console.log('Sent:', message);
//     }, 5000); 

//     ws.on('close', () => {
//         console.log('Client disconnected');
//     });

// });

}

// export function sentDataToWebSocket(message) {
//     wss.on('connection', (ws) => {
//         ws.send(message);
//     });
// }