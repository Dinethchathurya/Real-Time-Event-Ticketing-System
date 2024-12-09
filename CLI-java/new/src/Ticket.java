//package lk.sadewni.oop.cw;
import java.math.BigDecimal;

public class Ticket {
    private int ticketId; // Ticket ID
    private String eventName; // Event name
    private BigDecimal priceOfTheTicket; // Price of the ticket

    // Constructor
    public Ticket(int ticketId, String eventName, BigDecimal priceOfTheTicket) {
        this.ticketId = ticketId;
        this.eventName = eventName;
        this.priceOfTheTicket = priceOfTheTicket;
    }

    // Getter for ticketId
    public int getTicketId() {
        return ticketId;
    }

    // Setter for ticketId
    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    // Getter for eventName
    public String getEventName() {
        return eventName;
    }

    // Setter for eventName
    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    // Getter for ticketPrice
    public BigDecimal getPriceOfTheTicket() {
        return priceOfTheTicket;
    }

    // Setter for ticketPrice
    public void setTicketPrice(BigDecimal priceOfTheTicket) {
        this.priceOfTheTicket = priceOfTheTicket;
    }

    // Override toString method
    @Override
    public String toString() {
        return "Ticket (" +
                "ticketId = " + ticketId +
                ", eventName = '" + eventName + '\''  +
                ", ticketPrice = " + priceOfTheTicket  +
                ')';
    }
}






