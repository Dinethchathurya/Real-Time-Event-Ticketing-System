import java.io.*;
public class Configuration implements Serializable {
    private static final String CONFIG_FILE = "config.ser";
    private int totalTickets;
    private int ticketReleaseRate;
    private int customerRetrievalRate;
    private int maximumTicketCapacity;


    //getters and setters
    public int getTotalTickets() {

        return totalTickets;
    }
    public void setTotalTickets(int totalTickets) {

        this.totalTickets = totalTickets;
    }
    public int getTicketReleaseRate() {

        return ticketReleaseRate;
    }
    public void setTicketReleaseRate(int ticketReleaseRate) {

        this.ticketReleaseRate = ticketReleaseRate;
    }
    public int getCustomerRetrievalRate() {

        return customerRetrievalRate;
    }
    public void setCustomerRetrievalRate(int customerRetrievalRate) {
        this.customerRetrievalRate = customerRetrievalRate ;
    }
    public int getMaximumTicketCapacity() {

        return maximumTicketCapacity;
    }
    public void setMaximumTicketCapacity(int maximumTicketCapacity) {
        this.maximumTicketCapacity = maximumTicketCapacity;
    }

    public static boolean isExisting() {
        File file = new File(CONFIG_FILE);
        return file.exists();
    }


    public void SaveToJson() {
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(CONFIG_FILE))) {
            out.writeObject(this);
            System.out.println("-".repeat(50));
            System.out.println("Saved Configuration successfully.");
            System.out.println("-".repeat(50));
        } catch (IOException e) {
            System.out.println("Error saving configuration: " + e.getMessage());
        }
    }

    public void SaveToTextfile() {
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(CONFIG_FILE))) {
            Configuration loadedConfig = (Configuration) in.readObject();
            this.totalTickets = loadedConfig.totalTickets;
            this.ticketReleaseRate = loadedConfig.ticketReleaseRate;
            this.customerRetrievalRate = loadedConfig.customerRetrievalRate;
            this.maximumTicketCapacity = loadedConfig.maximumTicketCapacity;
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading configuration: " + e.getMessage());
        }
    }
}



