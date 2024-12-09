import java.util.concurrent.TimeUnit;
public class Main {
    public static void main(String[] args) {

        try {
            // Simulate real-time data output (e.g., runtime variable updates)
            for (int i = 0; i < 10; i++) {
                // Send data to stdout (captured by Node.js)
                System.out.println("Runtime value: " + Math.random());
                // Sleep for 1 second (to simulate real-time interval)
                TimeUnit.SECONDS.sleep(1);
            }

            // Keep the process running to continue sending data
            // Or replace with actual logic where your CLI continuously runs
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}