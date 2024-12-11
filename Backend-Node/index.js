import express from "express";
import {connectCLI} from "./cli.js";
import {connectWebSocket} from "./cli_websocket.js";
import cors from "cors";

const app = express();
const port = 5001;
app.use(cors());
app.use(express.json());


app.post("/start", async (req, res) => {
  console.log("backend node is called from react");
  const {numberOfTickets, ticketReleaseRate, customerRetrievalRate, maxTicketCapacity ,ticketQuantity} = req.body;
  await connectCLI(parseInt(numberOfTickets), parseInt(ticketReleaseRate), parseInt(customerRetrievalRate), parseInt(maxTicketCapacity),parseInt(ticketQuantity));
  connectWebSocket();
  res.send("Hello, World!");
  console.log("backend node is called from react");
});

app.post("/start", async (req, res) => {
  console.log("backend node is called from react");
  const {numberOfTickets, ticketReleaseRate, customerRetrievalRate, maxTicketCapacity ,ticketQuantity} = req.body;
  await connectCLI(parseInt(numberOfTickets), parseInt(ticketReleaseRate), parseInt(customerRetrievalRate), parseInt(maxTicketCapacity),parseInt(ticketQuantity));
  connectWebSocket();
  res.send("Hello, World!");
  console.log("backend node is called from react");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
