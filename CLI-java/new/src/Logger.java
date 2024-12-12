////package lk.sadewni.oop.cw;
//import java.io.BufferedWriter;
//import java.io.FileWriter;
//import java.io.IOException;
//import java.time.LocalDateTime;
//
//
//public class Logger {
//    private static final String LOG_FILE = "../../resources/logs.txt";
//    public static void log(String message) {
//        String timeStampedMessage = LocalDateTime.now() + ": " + message;
//        System.out.println(timeStampedMessage);
//        try (BufferedWriter writer = new BufferedWriter(new FileWriter(LOG_FILE, true))) {
//            writer.write(timeStampedMessage);
//            writer.newLine();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//}
//



import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;

public class Logger {
    // Use relative path for the log file
    private static final String LOG_FILE = "../../resources/logs.txt";

    public static void log(String message) {
        String timeStampedMessage = LocalDateTime.now() + ": " + message;
        System.out.println(timeStampedMessage);

        // Create a File object for the log file
        File logFile = new File(LOG_FILE);

        try {
            // Check if the file's parent directories exist, and create them if necessary
            logFile.getParentFile().mkdirs();

            // Check if the file exists, and create it if it doesn't
            if (!logFile.exists()) {
                System.out.println("Log file not found. Creating new log file.");
                logFile.createNewFile();
            }

            // Write to the log file (append mode)
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(logFile, true))) {
                writer.write(timeStampedMessage);
                writer.newLine();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

