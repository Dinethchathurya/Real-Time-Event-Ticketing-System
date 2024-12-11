//package lk.sadewni.oop.cw;
import com.google.gson.Gson;
import org.java_websocket.server.WebSocketServer;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;

import java.net.InetSocketAddress;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class TicketPool {
    private  Queue<Ticket> tickets ;
    private int maximumCapacity;
    private WebSocketServer webSocketServer;
    private int TotalTicketsSoled ;
    private int TotalTicketsReleaseByVender ;

    public TicketPool(int maximumCapacity) {

        this.maximumCapacity = maximumCapacity;
        this.tickets = new LinkedList<>();

        // this is a websocket for send data to node server
        webSocketServer = new WebSocketServer(new InetSocketAddress(8081)) {

            @Override
            public void onOpen(WebSocket conn, ClientHandshake handshake) {
                System.out.println("New connection from " + conn.getRemoteSocketAddress());
            }

            @Override
            public void onClose(WebSocket conn, int code, String reason, boolean remote) {
                System.out.println("Closed connection to " + conn.getRemoteSocketAddress());
            }

            @Override
            public void onMessage(WebSocket conn, String message) {
                // Handle incoming messages from Node.js (if necessary)
            }

            @Override
            public void onError(WebSocket conn, Exception ex) {
                ex.printStackTrace();
            }

            @Override
            public void onStart() {
                System.out.println("WebSocket server started on port: " + 8081);
            }
        };
        webSocketServer.start();
    }
    public synchronized void addTickets(Ticket ticket) {
        while (tickets.size() >= maximumCapacity) {
            try {
                Logger.log( "Ticket Pool is full! Vendor is waiting..");
                wait();
            }catch (InterruptedException e){
                e.printStackTrace(); // For command line interface (CLI)
                throw new RuntimeException(e.getMessage());
            }
        }
        this.tickets.add(ticket);
        notifyAll();
        Logger.log("Ticket added by - " + Thread.currentThread().getName()  + " - current size is - " + tickets.size());
        TotalTicketsReleaseByVender += 1;
        sendTicketCount();
    }
    public synchronized Ticket removeTickets() {
        while (tickets.isEmpty()) {
            try {
                Logger.log("No tickets! Customer is waiting..");
                wait();
            }catch (InterruptedException e) {
                throw new RuntimeException(e.getMessage());
            }
        }
        Ticket ticket = tickets.poll();
        Logger.log( "Ticket bought by - " + Thread.currentThread().getName()  + " - current size is - " + tickets.size() + " -: Ticket is - " + ticket ) ;
        notifyAll();
        TotalTicketsSoled += 1;
        sendTicketCount();
        return removeTickets();
    }
    private void sendTicketCount() {
        int TotalTicketsReleaseByVenders = TotalTicketsReleaseByVender;
        for (WebSocket conn : webSocketServer.getConnections()) {

            List<Object> dataList = new ArrayList<>();
            dataList.add(tickets.size());
            dataList.add(TotalTicketsReleaseByVenders);
            dataList.add(TotalTicketsSoled);

            String jsonData = new Gson().toJson(dataList);

            conn.send(jsonData);
        }
    }
}

