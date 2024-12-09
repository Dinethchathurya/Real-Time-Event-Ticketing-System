//package lk.sadewni.oop.cw;

import java.util.LinkedList;
import java.util.Queue;

public class TicketPool {
    private  Queue<Ticket> tickets ;
    private int maximumCapacity;

    public TicketPool(int maximumCapacity) {

        this.maximumCapacity = maximumCapacity;
        this.tickets = new LinkedList<>();
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
        return removeTickets();
    }
}

