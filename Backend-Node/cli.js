import { spawn } from "child_process";

import {createConnectionCliLogsWebsocket, sendCliLogsWebsocket, }from "./cli_logs_websocket.js";

let javaCLI;

export async function connectCLI(
  totalTickets,
  ticketReleaseRate,
  customerRetrievalRate,
  maximumTicketCapacity,
  ticketQuantity
) {
  javaCLI = spawn("java", [
    "-jar",
    "../CLI-java/new/out/artifacts/new_jar3/new.jar",
    totalTickets,
    ticketReleaseRate,
    customerRetrievalRate,
    maximumTicketCapacity,
    ticketQuantity,
  ]);
  
  createConnectionCliLogsWebsocket();
  
  javaCLI.stdout.on("data", (data) => {
    sendCliLogsWebsocket(data.toString());
    console.log(`Received real-time data from Java CLI: ${data.toString()}`);
    
  });

  javaCLI.stderr.on("data", (data) => {
    sendCliLogsWebsocket(`Error from Java CLI: ${data}`);
    console.error(`Error from Java CLI: ${data}`);
  });

  javaCLI.on("close", (code) => {
    sendCliLogsWebsocket(`Java CLI process exited ${code}`);
    console.log(`Java CLI process exited with code ${code}`);
  });
}

export function stopCLI() {
  if (javaCLI) {
    console.log("Stopping Java CLI process...");
    javaCLI.kill(); // This sends a 'SIGTERM' signal to stop the process
  } else {
    console.log("No Java CLI process is running.");
  }
}
