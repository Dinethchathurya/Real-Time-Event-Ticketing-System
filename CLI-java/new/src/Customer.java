//package lk.sadewni.oop.cw;
//import java.util.logging.Logger;
public class Customer implements Runnable {
    private TicketPool ticketPool;
    private  int customerRetrievalRate;
    private int ticketQuantity;
    //private static final Logger logger = LogManager.getLogger(Customer.class);


    public Customer(TicketPool ticketPool,int customerRetrievalRate, int ticketQuantity) {
        this.ticketPool = ticketPool;
        this.customerRetrievalRate= customerRetrievalRate;
        this.ticketQuantity = ticketQuantity;
    }
    @Override
    public void run() {

        for (int i = 0; i < ticketQuantity; i++) {
            Ticket ticket = ticketPool.removeTickets();
            if (ticket != null) {
                Logger.log("Ticket - " + ticket + " - Name of the customer - " + Thread.currentThread().getName());
            } else {
                Logger.log(Thread.currentThread().getName() + " found no tickets to purchase.");
            }

            try {
                Thread.sleep(customerRetrievalRate * 1000); // Simulate delay between purchases
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}


