import express from "express";
import {connectCLI} from "./cli.js";
import {connectWebSocket} from "./cli_websocket.js";
import cors from "cors";
import {reactWebSocket} from "./react_websocket.js";


const app = express();
const port = 5001;
app.use(cors());
app.use(express.json());


reactWebSocket();

app.post("/start", async (req, res) => {
  const {numberOfTickets, ticketReleaseRate, customerRetrievalRate, maxTicketCapacity ,ticketQuantity} = req.body;
  await connectCLI(parseInt(numberOfTickets), parseInt(ticketReleaseRate), parseInt(customerRetrievalRate), parseInt(maxTicketCapacity),parseInt(ticketQuantity));
  connectWebSocket();
  res.send("Hello, World!");
});

app.get("/api/example", (req, res) => {
  res.json({
    message: "This is an example API response.",
    timestamp: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
