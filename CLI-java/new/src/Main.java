// Source code is decompiled from a .class file using FernFlower decompiler.
import java.util.Scanner;

public class Main {
    public Main() {
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Configuration confi = new Configuration();
        int totalTickets;
        int ticketReleaseRate;
        int customerRetrievalRate;
        int maximumTicketCapacity;
        int ticketQuantity;
        if (args.length > 1) {
            totalTickets = Integer.parseInt(args[0]);
            ticketReleaseRate = Integer.parseInt(args[1]);
            customerRetrievalRate = Integer.parseInt(args[2]);
            maximumTicketCapacity = Integer.parseInt(args[3]);
            ticketQuantity = Integer.parseInt(args[4]);
        } else {
            System.out.println("*".repeat(50));
            System.out.println("\tWelcome to the Real-Time-Ticketing System!!!\t\t");
            System.out.println("*".repeat(50));
            totalTickets = -1;

            while(totalTickets <= 0) {
                Logger.log("Enter the total number of tickets :");
                if (scanner.hasNextInt()) {
                    totalTickets = scanner.nextInt();
                    if (totalTickets <= 0) {
                        Logger.log("Please enter a number grater than zero ");
                    }
                } else {
                    Logger.log("Input is invalid.please enter a valid integer.");
                    scanner.next();
                }
            }

            ticketReleaseRate = -1;

            while(ticketReleaseRate <= 0) {
                Logger.log("Enter the ticket release rate:");
                if (scanner.hasNextInt()) {
                    ticketReleaseRate = scanner.nextInt();
                    if (ticketReleaseRate <= 0) {
                        Logger.log("Please enter a number grater than zero .");
                    }
                } else {
                    Logger.log("Input is invalid.Please enter a valid integer.");
                    scanner.next();
                }
            }

            customerRetrievalRate = -1;

            while(customerRetrievalRate <= 0) {
                Logger.log("Enter the customer retrieval rate :");
                if (scanner.hasNextInt()) {
                    customerRetrievalRate = scanner.nextInt();
                    if (customerRetrievalRate <= 0) {
                        Logger.log("Please enter a number grater than zero .");
                    }
                } else {
                    Logger.log("Input is invalid.Please enter a valid integer.");
                    scanner.next();
                }
            }

            maximumTicketCapacity = -1;

            while(maximumTicketCapacity <= 0) {
                Logger.log("Enter maximum ticket capacity:");
                if (scanner.hasNextInt()) {
                    maximumTicketCapacity = scanner.nextInt();
                    if (maximumTicketCapacity <= 0) {
                        Logger.log("Please enter a number grater than zero .");
                    } else if (maximumTicketCapacity > totalTickets) {
                        Logger.log("maximum ticket capacity can not be exceed total amount of tickets");
                        maximumTicketCapacity = -1;
                    }
                } else {
                    Logger.log("Input is invalid.Please enter a valid integer.");
                    scanner.next();
                }
            }

            ticketQuantity = -1;

            while(ticketQuantity <= 0 || ticketQuantity > maximumTicketCapacity) {
                Logger.log("Enter the quantity of tickets a customer can retrieve at a time: ");
                if (scanner.hasNextInt()) {
                    ticketQuantity = scanner.nextInt();
                    if (ticketQuantity <= 0) {
                        Logger.log("Please enter a number grater than zero.");
                    } else if (ticketQuantity > maximumTicketCapacity) {
                        Logger.log("Ticket quantity cannot exceed the maximum ticket capacity");
                    }
                } else {
                    Logger.log("Input is invalid.Please enter a valid integer.");
                    scanner.next();
                }
            }
        }

        confi.setTotalTickets(totalTickets);
        confi.setTicketReleaseRate(ticketReleaseRate);
        confi.setCustomerRetrievalRate(customerRetrievalRate);
        confi.setMaximumTicketCapacity(maximumTicketCapacity);
        confi.SaveToJson();
        confi.SaveToTextfile();
        Logger.log("Total Ticket Amount: " + confi.getTotalTickets());
        Logger.log("Ticket Release Rate: " + confi.getTicketReleaseRate());
        Logger.log("Customer Retrieval Rate: " + confi.getCustomerRetrievalRate());
        Logger.log("Maximum Ticket Capacity: " + confi.getMaximumTicketCapacity());
        Logger.log("Ticket Quantity per customer: " + ticketQuantity);
        System.out.println("_".repeat(50));
        TicketPool ticketPool = new TicketPool(maximumTicketCapacity);
        Vendor[] vendors = new Vendor[3];

        for(int i = 0; i < vendors.length; ++i) {
            vendors[i] = new Vendor(ticketPool, ticketReleaseRate, totalTickets);
            Thread vendorThread = new Thread(vendors[i], "Vendor Id:" + i);
            vendorThread.start();
        }

        Customer[] customers = new Customer[2];

        for(int i = 0; i < customers.length; ++i) {
            customers[i] = new Customer(ticketPool, customerRetrievalRate, ticketQuantity);
            Thread customerThread = new Thread(customers[i], "Customer Id:" + i);
            customerThread.start();
        }

        scanner.nextLine();
        scanner.close();
    }
}
