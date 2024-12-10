//package lk.sadewni.oop.cw;
import java.math.BigDecimal;
//import java.util.logging.Logger;

public class Vendor implements Runnable {
    private final int totalTickets;
    private final int ticketReleaseRate;
    private final TicketPool ticketPool;
    //private static final Logger logger = LogManager.getLogger(Vendor.class);

    public Vendor(TicketPool ticketPool, int ticketReleaseRate, int totalTickets) {
        this.totalTickets = totalTickets;
        this.ticketReleaseRate = ticketReleaseRate;
        this.ticketPool = ticketPool;
    }

    @Override
    public void run() {
        for (int i = 1; i < totalTickets; i++) {
            Ticket ticket = new Ticket(i, "Music Event", new BigDecimal("1000"));
            ticketPool.addTickets(ticket);
            try {

                Thread.sleep(ticketReleaseRate * 1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

        }
    }
}




