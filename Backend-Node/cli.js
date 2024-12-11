import { spawn } from "child_process";

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
    "../CLI-java/new/out/artifacts/new_jar2/new.jar",
    totalTickets,
    ticketReleaseRate,
    customerRetrievalRate,
    maximumTicketCapacity,
    ticketQuantity,
  ]);

  javaCLI.stdout.on("data", (data) => {
    console.log(`Received real-time data from Java CLI: ${data.toString()}`);
  });

  javaCLI.stderr.on("data", (data) => {
    console.error(`Error from Java CLI: ${data}`);
  });

  javaCLI.on("close", (code) => {
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
