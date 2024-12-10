import { spawn } from "child_process";

export async function connectCLI(totalTickets, ticketReleaseRate, customerRetrievalRate, maximumTicketCapacity,ticketQuantity) {

    const javaCLI = spawn("java", [
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